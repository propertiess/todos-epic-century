import { FC, HTMLAttributes } from 'react';
import { TodoList } from '@/components';
import { useFilteredAndSortedTodos } from '@/hooks';
import styles from './TodoScreen.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const TodoScreen: FC<Props> = ({ ...rest }) => {
  const { filteredSortedTodos } = useFilteredAndSortedTodos();

  return (
    <div className={styles.screen} {...rest}>
      <TodoList todos={filteredSortedTodos} />
    </div>
  );
};

export { TodoScreen };
