import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Container = ({ children }: Props) => {
  return <div className='px-2'>{children}</div>;
};
