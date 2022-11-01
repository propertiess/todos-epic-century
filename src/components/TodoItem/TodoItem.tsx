import { FC, HTMLAttributes } from "react";
import { ITodo } from "@/interfaces/todo.interface";
import { useActions } from "@/store/hooks/useActions";
import { RemoveIcon } from "@/components/ui/icons";
import styles from "./TodoItem.module.scss";

interface Props extends HTMLAttributes<unknown> {
  todo: ITodo;
}

const TodoItem: FC<Props> = ({ todo, ...rest }) => {
  const { toggleChecked, removeTodo } = useActions();

  const toggle = () => {
    toggleChecked(todo.id);
  };

  return (
    <li className={styles.item} {...rest}>
      <input
        id={todo.id.toString()}
        onChange={toggle}
        type='checkbox'
        checked={todo.checked}
      />
      <label data-testid='todo-label' htmlFor={todo.id.toString()}>
        {todo.title}
      </label>
      <RemoveIcon className={styles.icon} onClick={() => removeTodo(todo.id)} />
    </li>
  );
};

export default TodoItem;
