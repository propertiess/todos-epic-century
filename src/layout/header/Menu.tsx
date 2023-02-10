import { Link } from 'react-router-dom';
import { FilterTabs } from './FilterTabs';
import Logo from '/logo.png';

export const Menu = () => {
  return (
    <nav className='flex justify-center items-center'>
      <Link to='/'>
        <img className='block py-1 h-8' src={Logo} alt='logo' />
      </Link>
      <FilterTabs />
    </nav>
  );
};
