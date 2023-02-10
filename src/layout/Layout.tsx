import { PropsWithChildren } from 'react';
import { Footer, Header } from '@/layout';

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
