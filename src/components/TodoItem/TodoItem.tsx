import { FC } from 'react';
import { motion } from 'framer-motion';
import { RemoveIcon } from '@/components/ui/icons';
import { fadeInOutDown } from '@/animation';
import { ITodo } from '@/interfaces/todo.interface';
import { useActions } from '@/store/hooks/useActions';
import styles from './TodoItem.module.scss';

interface Props {
  todo: ITodo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const { toggleChecked, removeTodo } = useActions();
  const isTodoDone = todo.checked ? styles.done : '';

  const toggle = () => {
    toggleChecked(todo.id);
  };

  return (
    <motion.li
      className={styles.item}
      onClick={toggle}
      layout
      {...fadeInOutDown}
      data-testid='item'
    >
      <input type='checkbox' checked={todo.checked} readOnly />
      <label data-testid='todo-label' className={isTodoDone}>
        {todo.title}
      </label>
      <RemoveIcon
        className={styles.icon + ' ' + isTodoDone}
        onClick={() => removeTodo(todo.id)}
      />
    </motion.li>
  );
};

export { TodoItem };
