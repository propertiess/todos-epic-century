import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInOutDown } from '@/animation';
import { ITodo } from '@/interfaces/todo.interface';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import styles from './TodoItem.module.scss';

interface Props {
  todo: ITodo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const { id } = useAppSelector(state => state.contextMenu);
  const { toggleChecked, setShowContextMenu } = useActions();
  const isTodoDone = todo.checked ? styles.done : '';

  const toggle = () => {
    setShowContextMenu(null);
    toggleChecked(todo.id);
  };

  const openContextMenu = (
    e: React.MouseEvent<HTMLLIElement> | React.TouchEvent<HTMLLIElement>
  ) => {
    if (e.type === 'touchmove') {
      id && todo.id !== id && setShowContextMenu(todo.id);
      !id && setShowContextMenu(todo.id);
      return;
    }
    
    e.preventDefault();
    setShowContextMenu(todo.id);
  };

  return (
    <motion.li
      className={styles.item}
      onClick={toggle}
      onContextMenu={openContextMenu}
      onTouchMove={openContextMenu}
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
