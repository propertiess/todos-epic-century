import { Footer, Header, Main, Snackbar } from '@/components';
import { useAppSelector } from '@/store/hooks/useAppSelector';

const App = () => {
  const isShow = useAppSelector(state => state.snackbar);

  return (
    <>
      <Header />
      <Main />
      <Snackbar title='Введите задачу!' isShow={isShow} />
      <Footer />
    </>
  );
};

export { App };
