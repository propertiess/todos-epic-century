import { HTMLAttributes } from 'react';
import { Menu } from '@/components';

type Props = HTMLAttributes<unknown>;

export const Header = ({ ...rest }: Props) => {
  return (
    <header className='px-2 bg-main mb-5' {...rest}>
      <Menu />
    </header>
  );
};
