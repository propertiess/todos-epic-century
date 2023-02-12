import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useActions } from '@/app/store/hooks/useActions';
import { useAppSelector } from '@/app/store/hooks/useAppSelector';
import { EditTodoItem, TodoItem, TodoItemContextMenu } from '@/entities/todo';
import { useFilteredAndSortedTodos, useParamFilterBy } from '@/shared/hooks';

export const TodosContainer = () => {
  const todos = useAppSelector(state => state.todos);
  const { removeTodo, toggleChecked, changeTodo } = useActions();
  const { filterBy, changeFilterBy } = useParamFilterBy();
  const { filteredSortedTodos } = useFilteredAndSortedTodos(todos, filterBy);

  const contextMenuRef = useRef<HTMLDivElement>(null);

  const [contextMenuProps, setContextMenuProps] = useState<{
    top?: number | string;
    left?: number | string;
    id: number | null;
  }>({ id: null });

  const [editItem, setEditItem] = useState<number | null>(null);

  const onContextMenu = useCallback(
    (e: React.MouseEvent<HTMLLIElement>, id: number) => {
      const clientX =
        e.clientX ?? (e as unknown as TouchEvent).touches[0].clientX;
      const clientY =
        e.clientY ?? (e as unknown as TouchEvent).touches[0].clientY;

      setContextMenuProps({
        id,
        top: clientY,
        left: clientX
      });
    },
    []
  );

  const closeContextMenu = () => {
    setContextMenuProps(prev => ({
      ...prev,
      id: null
    }));
  };

  const onChecked = useCallback((id: number) => {
    toggleChecked(id);
  }, []);

  const removeItem = (id: number) => {
    removeTodo(id);
    closeContextMenu();
  };

  const openEditItem = (id: number) => {
    setEditItem(id);
    closeContextMenu();
  };

  const closeEditItem = () => {
    setEditItem(null);
    closeContextMenu();
  };

  const onEditItem = (id: number, value: string) => {
    changeTodo({ id, value });
    setEditItem(null);
  };

  useEffect(() => {
    filterBy !== 'all' && changeFilterBy(filterBy);
  }, []);

  useEffect(() => {
    const closeContextMenuOnClickBody = (e: MouseEvent) => {
      if (
        contextMenuRef.current?.contains(e.target as HTMLElement) ||
        !contextMenuProps.id
      ) {
        return;
      }

      closeContextMenu();
    };

    document.body.addEventListener('mousedown', closeContextMenuOnClickBody);

    return () => {
      document.body.removeEventListener(
        'mousedown',
        closeContextMenuOnClickBody
      );
    };
  }, [contextMenuProps.id]);

  return (
    <>
      <motion.ul className='mt-5' layout onClick={closeContextMenu}>
        <AnimatePresence initial={false} mode='popLayout'>
          {filteredSortedTodos.map(todo => (
            <Fragment key={todo.id}>
              {editItem !== todo.id ? (
                <TodoItem
                  todo={todo}
                  onContextMenu={onContextMenu}
                  onChecked={onChecked}
                />
              ) : (
                <EditTodoItem
                  id={todo.id}
                  title={todo.title}
                  onChange={onEditItem}
                  onCloseChange={closeEditItem}
                />
              )}
            </Fragment>
          ))}
        </AnimatePresence>
      </motion.ul>
      <TodoItemContextMenu
        ref={contextMenuRef}
        removeItem={removeItem}
        openEditItem={openEditItem}
        {...contextMenuProps}
      />
    </>
  );
};
