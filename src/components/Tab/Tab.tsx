import { FC, HTMLAttributes } from 'react';
import { useFilterType } from '@/hooks/useFilterType';
import styles from './Tab.module.scss';

interface Props extends HTMLAttributes<unknown> {
  Component: JSX.Element;
  type: 'all' | 'checked' | 'unchecked';
}

const Tab: FC<Props> = ({ Component, type, ...rest }) => {
  const { activeTab } = useFilterType(type);

  return (
    <li className={styles.li + ' ' + activeTab} {...rest}>
      {Component}
    </li>
  );
};

export { Tab };
