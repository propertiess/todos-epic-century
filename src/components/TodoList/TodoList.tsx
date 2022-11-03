import { FC, HTMLAttributes } from 'react';
import { TodoItem } from '@/components/TodoItem/TodoItem';
import { ITodo } from '@/interfaces/todo.interface';
import styles from './TodoList.module.scss';

interface Props extends HTMLAttributes<unknown> {
  todos: ITodo[];
}

const TodoList: FC<Props> = ({ todos, ...rest }) => {
  return (
    <ul className={styles.list} {...rest}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export { TodoList };
