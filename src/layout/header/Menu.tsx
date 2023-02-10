import { Link } from 'react-router-dom';

import { FilterTabs } from './FilterTabs';

import Logo from '/logo.png';

export const Menu = () => {
  return (
    <nav className='flex items-center justify-center'>
      <Link to='/'>
        <img className='block h-8 py-1' src={Logo} alt='logo' />
      </Link>
      <FilterTabs />
    </nav>
  );
};
