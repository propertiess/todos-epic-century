import { HTMLAttributes } from 'react';

import { Menu } from './Menu';

type Props = HTMLAttributes<unknown>;

export const Header = ({ ...rest }: Props) => {
  return (
    <header className='mb-5 bg-main px-2' {...rest}>
      <Menu />
    </header>
  );
};
