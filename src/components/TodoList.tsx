import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TodoItem } from '@/components/TodoItem/TodoItem';
import { ITodo } from '@/interfaces/todo.interface';
import { useActions } from '@/store/hooks/useActions';
import { TodoItemContextMenu } from './TodoItemContextMenu';

type Props = {
  todos: ITodo[];
};

export const TodoList = ({ todos }: Props) => {
  const { removeTodo, toggleChecked } = useActions();
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const [contextMenuProps, setContextMenuProps] = useState<{
    top?: number | string;
    left?: number | string;
    id: number | null;
  }>({ id: null });

  const onContextMenu = useCallback(
    (e: React.MouseEvent<HTMLLIElement>, id: number) => {
      setContextMenuProps({ id, top: e.clientY, left: e.clientX });
    },
    []
  );

  const onChecked = useCallback((id: number) => {
    toggleChecked(id);
  }, []);

  const onRemove = (id: number) => {
    removeTodo(id);
    setContextMenuProps({ ...contextMenuProps, id: null });
  };

  useEffect(() => {
    const closeContextMenu = (e: MouseEvent) => {
      if (
        contextMenuRef.current?.contains(e.target as HTMLElement) ||
        !Boolean(contextMenuProps.id)
      ) {
        return;
      }

      setContextMenuProps(prev => ({
        ...prev,
        id: null
      }));
    };

    document.body.addEventListener('mousedown', closeContextMenu);

    return () => {
      document.body.removeEventListener('mousedown', closeContextMenu);
    };
  }, [contextMenuProps.id]);

  return (
    <>
      <motion.ul
        className='mt-5'
        layout
        onClick={() => setContextMenuProps({ ...contextMenuProps, id: null })}
      >
        <AnimatePresence initial={false} mode='popLayout'>
          {todos.map(todo => (
            <Fragment key={todo.id}>
              <TodoItem
                todo={todo}
                onContextMenu={onContextMenu}
                onChecked={onChecked}
              />
            </Fragment>
          ))}
        </AnimatePresence>
      </motion.ul>
      <TodoItemContextMenu
        ref={contextMenuRef}
        onRemove={onRemove}
        {...contextMenuProps}
      />
    </>
  );
};
