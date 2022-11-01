import { FC, HTMLAttributes } from "react";
import styles from "./Header.module.scss";

interface Props extends HTMLAttributes<unknown> {}

const Header: FC<Props> = ({ ...rest }) => {
  return (
    <header className={styles.header} {...rest}>
      <h1>TodoList</h1>
    </header>
  );
};

export default Header;
