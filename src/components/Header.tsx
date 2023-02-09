import { FC, HTMLAttributes } from 'react';
import { Navbar } from '@/components';
import styles from './Header.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const Header: FC<Props> = ({ ...rest }) => {
  return (
    <header className='px-2 bg-[#35A7FF] mb-5' {...rest}>
      <Navbar />
    </header>
  );
};

export { Header };
