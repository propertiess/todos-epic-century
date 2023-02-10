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
        'flex justify-center items-center cursor-pointer list-none py-1 w-[50px] transition',
        filterBy === type && 'bg-[#333] bg-opacity-10'
      )}
      {...rest}
    >
      {Component}
    </li>
  );
};
