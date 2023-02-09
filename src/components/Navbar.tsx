import { FC, HTMLAttributes } from 'react';
import Logo from '@/assets/logo.png';
import { FilterTabs } from './FilterTabs/FilterTabs';

interface Props extends HTMLAttributes<unknown> {}

const Navbar: FC<Props> = ({ ...rest }) => {
  return (
    <nav className='flex justify-center items-center' {...rest}>
      <a href='./'>
        <img className='block py-1 h-8' src={Logo} alt='logo' />
      </a>
      <FilterTabs />
    </nav>
  );
};

export { Navbar };
