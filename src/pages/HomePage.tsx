import { Container, TodoContainer, TodoForm } from '@/components';
import { Layout } from '@/layout';

export const HomePage = () => {
  return (
    <Layout>
      <Container>
        <TodoForm />
        <TodoContainer />
      </Container>
    </Layout>
  );
};
