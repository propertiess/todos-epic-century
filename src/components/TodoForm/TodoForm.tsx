import MyButton from "@/components/ui/MyButton/MyButton";
import { FC, HTMLAttributes, useState } from "react";
import { useActions } from "@/store/hooks/useActions";
import styles from "./TodoForm.module.scss";

interface Props extends HTMLAttributes<unknown> {}

const TodoForm: FC<Props> = ({ ...rest }) => {
  const [value, setValue] = useState("");
  const { createTodo } = useActions();

  const addTodo = () => {
    if (value.trim()) {
      createTodo(value);
      setValue("");
      return;
    }
    alert("Field is empty!");
  };

  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()} {...rest}>
      <input
        data-testid='input'
        value={value}
        onChange={e => setValue(e.target.value)}
        type='text'
      />
      <MyButton data-testid='btn' onClick={addTodo}>
        Add
      </MyButton>
    </form>
  );
};

export default TodoForm;
