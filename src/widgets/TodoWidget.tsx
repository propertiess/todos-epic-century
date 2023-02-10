import { TodoForm } from '@/entities/todo';
import { TodosContainer } from '@/features/todo';
import { Container } from '@/layout/Container';

export const TodoWidget = () => {
  return (
    <Container>
      <TodoForm />
      <TodosContainer />
    </Container>
  );
};
