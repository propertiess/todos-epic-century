import { Container, TodoForm, TodoScreen } from '@/components';

const Main = () => {
  return (
    <main>
      <Container>
        <TodoForm />
        <TodoScreen />
      </Container>
    </main>
  );
};

export { Main };
