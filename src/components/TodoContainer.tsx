import { useEffect } from 'react';
import { useFilteredAndSortedTodos, useParamFilterBy } from '@/hooks';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import { TodoList } from './TodoList';

export const TodoContainer = () => {
  const todos = useAppSelector(state => state.todos);
  const { filterBy, changeFilterBy } = useParamFilterBy();
  const { filteredSortedTodos } = useFilteredAndSortedTodos(todos, filterBy);

  useEffect(() => {
    filterBy !== 'all' && changeFilterBy(filterBy);
  }, []);

  return <TodoList todos={filteredSortedTodos} />;
};
