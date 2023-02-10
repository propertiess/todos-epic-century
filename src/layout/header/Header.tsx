import { HTMLAttributes } from 'react';
import { Menu } from './Menu';

type Props = HTMLAttributes<unknown>;

export const Header = ({ ...rest }: Props) => {
  return (
    <header className='px-2 bg-main mb-5' {...rest}>
      <Menu />
    </header>
  );
};
