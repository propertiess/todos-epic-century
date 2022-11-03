import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './MyButton.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const MyButton: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
};

export { MyButton };
