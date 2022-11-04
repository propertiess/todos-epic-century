import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TodoItem } from '@/components/TodoItem/TodoItem';
import { ITodo } from '@/interfaces/todo.interface';
import styles from './TodoList.module.scss';

interface Props {
  todos: ITodo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <motion.ul className={styles.list} layout>
      <AnimatePresence initial={false} mode='popLayout'>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export { TodoList };
