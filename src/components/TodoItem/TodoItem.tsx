import { FC } from 'react';
import { motion } from 'framer-motion';
import { LongPressDetectEvents, useLongPress } from 'use-long-press';
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

  const onLongPress = useLongPress(() => setShowContextMenu(todo.id), {
    detect: LongPressDetectEvents.TOUCH
  });

  const toggle = () => {
    setShowContextMenu(null);
    toggleChecked(todo.id);
  };

  const openContextMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setShowContextMenu(todo.id);
  };

  return (
    <motion.li
      className={styles.item}
      onClick={toggle}
      onContextMenu={openContextMenu}
      layout
      {...fadeInOutDown}
      {...onLongPress()}
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
