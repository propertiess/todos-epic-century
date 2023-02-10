import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useActions } from '@/app/store/hooks/useActions';
import { useAppSelector } from '@/app/store/hooks/useAppSelector';
import { ChangeTodoItem, TodoItem, TodoItemContextMenu } from '@/entities/todo';
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

  const [changeItem, setChangeItem] = useState<number | null>(null);

  useEffect(() => {
    filterBy !== 'all' && changeFilterBy(filterBy);
  }, []);

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

  const onRemove = (id: number) => {
    removeTodo(id);
    closeContextMenu();
  };

  const openChangeItem = (id: number) => {
    setChangeItem(id);
    closeContextMenu();
  };

  const onCloseChangeItem = () => {
    setChangeItem(null);
    closeContextMenu();
  };

  const onChangeItem = (id: number, value: string) => {
    changeTodo({ id, value });
    setChangeItem(null);
  };

  useEffect(() => {
    const closeContextMenuOnClickBody = (e: MouseEvent) => {
      if (
        contextMenuRef.current?.contains(e.target as HTMLElement) ||
        !Boolean(contextMenuProps.id)
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
              {changeItem !== todo.id ? (
                <TodoItem
                  todo={todo}
                  onContextMenu={onContextMenu}
                  onChecked={onChecked}
                />
              ) : (
                <ChangeTodoItem
                  id={todo.id}
                  title={todo.title}
                  onChange={onChangeItem}
                  onCloseChange={onCloseChangeItem}
                />
              )}
            </Fragment>
          ))}
        </AnimatePresence>
      </motion.ul>
      <TodoItemContextMenu
        ref={contextMenuRef}
        onRemove={onRemove}
        onChange={openChangeItem}
        {...contextMenuProps}
      />
    </>
  );
};
