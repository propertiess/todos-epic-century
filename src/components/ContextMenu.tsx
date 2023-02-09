import React, { FC, HTMLAttributes } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInOut } from '@/animation';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';

interface Props extends HTMLAttributes<HTMLDivElement> {
  todoId: number;
}

const ContextMenu: FC<Props> = ({ todoId }) => {
  const { id } = useAppSelector(state => state.contextMenu);
  const { removeTodo, setShowContextMenu } = useActions();

  const closeContextAndRemoveTodo = () => {
    removeTodo(todoId);
    setShowContextMenu(null);
  };

  return (
    <AnimatePresence initial={false}>
      {todoId === id && (
        <motion.div
          className='bg-white absolute top-0 right-3 p-3 shadow z-10'
          onClick={e => e.stopPropagation()}
          layout
          {...fadeInOut}
        >
          <button
            className='text-red-500 font-medium'
            onClick={closeContextAndRemoveTodo}
          >
            Удалить
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ContextMenu };
