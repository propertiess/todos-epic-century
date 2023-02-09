import { FC, HTMLAttributes } from 'react';
import { TodoList } from '@/components';
import { useFilteredAndSortedTodos } from '@/hooks';
import styles from './TodoScreen.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const TodoScreen: FC<Props> = ({ ...rest }) => {
  const { filteredSortedTodos } = useFilteredAndSortedTodos();

  return <TodoList todos={filteredSortedTodos} />;
};

export { TodoScreen };
