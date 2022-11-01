import React from "react";
import { Footer, Header, Main, Snackbar } from "@/components";
import { useAppSelector } from "@/store/hooks/useAppSelector";

function App() {
  const isShow = useAppSelector(state => state.snackbar);

  return (
    <>
      <Header />
      <Main />
      <Snackbar title='Введите задачу!' isShow={isShow} />
      <Footer />
    </>
  );
}

export default App;
