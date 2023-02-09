import { FC, Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TodoItem } from '@/components/TodoItem/TodoItem';
import { ITodo } from '@/interfaces/todo.interface';
import { ContextMenu } from './ContextMenu';
import styles from './TodoList.module.scss';

interface Props {
  todos: ITodo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <motion.ul className='mt-5' layout>
      <AnimatePresence initial={false} mode='popLayout'>
        {todos.map(todo => (
          <Fragment key={todo.id}>
            <TodoItem todo={todo} />
            <ContextMenu todoId={todo.id} />
          </Fragment>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export { TodoList };
