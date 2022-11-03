import { FC, HTMLAttributes } from 'react';
import Logo from '@/assets/logo.png';
import { FilterTabs } from '../FilterTabs/FilterTabs';
import styles from './Navbar.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const Navbar: FC<Props> = ({ ...rest }) => {
  return (
    <nav className={styles.nav} {...rest}>
      <a href='./'>
        <img src={Logo} alt='logo' />
      </a>
      <FilterTabs />
    </nav>
  );
};

export { Navbar };
