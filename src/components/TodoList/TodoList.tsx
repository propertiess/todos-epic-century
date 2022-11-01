import { FC, HTMLAttributes } from "react";
import { ITodo } from "@/interfaces/todo.interface";
import TodoItem from "@/components/TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

interface Props extends HTMLAttributes<unknown> {
  todos: ITodo[];
}

const TodoList: FC<Props> = ({ todos, ...rest }) => {
  return (
    <ul className={styles.list} {...rest}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
