import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TodoItem, TodoItemContextMenu } from '@/components';
import { useActions } from '@/store/hooks/useActions';
import { ITodo } from '@/types';

type Props = {
  todos: ITodo[];
};

export const TodoList = ({ todos }: Props) => {
  const { removeTodo, toggleChecked, changeTodo } = useActions();
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const [contextMenuProps, setContextMenuProps] = useState<{
    top?: number | string;
    left?: number | string;
    id: number | null;
  }>({ id: null });

  const [changeItem, setChangeItem] = useState<number | null>(null);

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

  const openChangeItem = useCallback((id: number) => {
    setChangeItem(id);
    closeContextMenu();
  }, []);

  const onCloseChangeItem = useCallback(() => {
    setChangeItem(null);
    closeContextMenu();
  }, []);

  const onChangeItem = useCallback((id: number, value: string) => {
    changeTodo({ id, value });
    console.log(id, value);
    setChangeItem(null);
  }, []);

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
          {todos.map(todo => (
            <Fragment key={todo.id}>
              <TodoItem
                todo={todo}
                onContextMenu={onContextMenu}
                isChanged={changeItem === todo.id}
                onChange={onChangeItem}
                onCloseChange={onCloseChangeItem}
                onChecked={onChecked}
              />
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
