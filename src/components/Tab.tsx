import { FC, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { useFilterType } from '@/hooks/useFilterType';
import styles from './Tab.module.scss';

interface Props extends HTMLAttributes<unknown> {
  Component: JSX.Element;
  type: 'all' | 'checked' | 'unchecked';
}

const Tab: FC<Props> = ({ Component, type, ...rest }) => {
  const { activeTab } = useFilterType(type);

  return (
    <li
      className={clsx(
        'flex justify-center items-center cursor-pointer list-none py-1 w-[50px] transition',
        activeTab
      )}
      {...rest}
    >
      {Component}
    </li>
  );
};

export { Tab };
