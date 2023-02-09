import { useEffect } from 'react';
import { Container, TodoForm, TodoList } from '@/components';
import { useFilteredAndSortedTodos, useParamFilterBy } from '@/hooks';
import { Layout } from '@/layout';
import { useAppSelector } from '@/store/hooks/useAppSelector';

export const HomePage = () => {
  const todos = useAppSelector(state => state.todos);
  const { filterBy, changeFilterBy } = useParamFilterBy();
  const { filteredSortedTodos } = useFilteredAndSortedTodos(todos, filterBy);

  useEffect(() => {
    changeFilterBy(filterBy);
  }, []);

  return (
    <Layout>
      <Container>
        <TodoForm />
        <TodoList todos={filteredSortedTodos} />
      </Container>
    </Layout>
  );
};
