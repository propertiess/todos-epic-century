import { RemoveIcon } from "@/components/ui/icons";
import { ITodo } from "@/interfaces/todo.interface";
import { useActions } from "@/store/hooks/useActions";
import { FC, HTMLAttributes } from "react";
import styles from "./TodoItem.module.scss";

interface Props extends HTMLAttributes<unknown> {
  todo: ITodo;
}

const TodoItem: FC<Props> = ({ todo, ...rest }) => {
  const { toggleChecked, removeTodo } = useActions();
  const isTodoDone = todo.checked ? styles.done : "";

  const toggle = () => {
    toggleChecked(todo.id);
  };

  return (
    <li className={styles.item} onClick={toggle} {...rest}>
      <input type='checkbox' checked={todo.checked} readOnly />
      <label data-testid='todo-label' className={isTodoDone}>
        {todo.title}
      </label>
      <RemoveIcon className={styles.icon} onClick={() => removeTodo(todo.id)} />
    </li>
  );
};

export default TodoItem;
