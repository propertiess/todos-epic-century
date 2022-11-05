import React, { FC, HTMLAttributes } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInOut } from '@/animation';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import styles from './ContextMenu.module.scss';

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
          className={styles.wrap}
          onClick={e => e.stopPropagation()}
          layout
          {...fadeInOut}
        >
          <button className={styles.btn} onClick={closeContextAndRemoveTodo}>
            Удалить
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ContextMenu };
