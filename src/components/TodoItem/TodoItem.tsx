import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInOutDown } from '@/animation';
import { ITodo } from '@/interfaces/todo.interface';
import { useActions } from '@/store/hooks/useActions';
import styles from './TodoItem.module.scss';

interface Props {
  todo: ITodo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const { toggleChecked, setShowContextMenu } = useActions();
  const isTodoDone = todo.checked ? styles.done : '';

  const toggle = () => {
    setShowContextMenu(null);
    toggleChecked(todo.id);
  };

  const openContextMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setShowContextMenu(todo.id);
  };

  const onTouchMoveCapture = () => {
    setShowContextMenu(todo.id);
  };

  return (
    <motion.li
      className={styles.item}
      onClick={toggle}
      onContextMenu={openContextMenu}
      onTouchMoveCapture={onTouchMoveCapture}
      layout
      {...fadeInOutDown}
      data-testid='item'
    >
      <input type='checkbox' checked={todo.checked} readOnly />
      <label data-testid='todo-label' className={isTodoDone}>
        {todo.title}
      </label>
    </motion.li>
  );
};

export { TodoItem };
