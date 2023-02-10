import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import { useParamFilterBy } from '@/shared/hooks';

type Props = HTMLAttributes<unknown> & {
  Component: JSX.Element;
  type: 'all' | 'checked' | 'unchecked';
};

export const MenuTab = ({ Component, type, ...rest }: Props) => {
  const { filterBy } = useParamFilterBy();

  return (
    <li
      className={clsx(
        'flex w-[50px] cursor-pointer list-none items-center justify-center py-1 transition',
        filterBy === type && 'bg-[#333] bg-opacity-10'
      )}
      {...rest}
    >
      {Component}
    </li>
  );
};
