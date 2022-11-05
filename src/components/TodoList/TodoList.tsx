import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TodoItem } from '@/components/TodoItem/TodoItem';
import { ITodo } from '@/interfaces/todo.interface';
import { ContextMenu } from '../contextMenu/ContextMenu';
import styles from './TodoList.module.scss';

interface Props {
  todos: ITodo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <motion.ul className={styles.list} layout>
      <AnimatePresence initial={false} mode='popLayout'>
        {todos.map(todo => (
          <div className='relative' key={todo.id}>
            <TodoItem todo={todo} />
            <ContextMenu todoId={todo.id} />
          </div>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export { TodoList };
