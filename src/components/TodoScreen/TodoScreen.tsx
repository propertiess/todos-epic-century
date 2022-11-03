import { FC, HTMLAttributes } from "react";
import { FilterTabs, TodoList } from "@/components";
import { useFilteredTodos } from "@/hooks/useFilteredTodos";
import styles from "./TodoScreen.module.scss";

interface Props extends HTMLAttributes<unknown> {}

const TodoScreen: FC<Props> = ({ ...rest }) => {
  const { filteredTodos } = useFilteredTodos();

  return (
    <div className={styles.wrap} {...rest}>
      <FilterTabs />
      <div className={styles.screen}>
        <TodoList todos={filteredTodos} />
      </div>
    </div>
  );
};

export { TodoScreen };
