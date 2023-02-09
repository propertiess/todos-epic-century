import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className='px-2'>{children}</div>;
};

export { Container };
