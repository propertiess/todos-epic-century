import { FC, HTMLAttributes } from 'react';
import { Container, TodoForm, TodoScreen } from '@/components';
import styles from './Main.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const Main: FC<Props> = ({ ...rest }) => {
  return (
    <main className={styles.main} {...rest}>
      <Container>
        <TodoForm />
        <TodoScreen />
      </Container>
    </main>
  );
};

export { Main };
