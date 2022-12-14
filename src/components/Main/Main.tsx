import { FC } from 'react';
import { Container, TodoForm, TodoScreen } from '@/components';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import styles from './Main.module.scss';

const Main: FC = () => {
  const { id } = useAppSelector(state => state.contextMenu);
  const { setShowContextMenu } = useActions();

  const closeContextMenu = () => {
    if (!id) return;
    setShowContextMenu(null);
  };

  return (
    <main className={styles.main} onClick={closeContextMenu}>
      <Container>
        <TodoForm />
        <TodoScreen />
      </Container>
    </main>
  );
};

export { Main };
