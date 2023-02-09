import { FC, HTMLAttributes, useState } from 'react';
import { MyButton } from '@/components/ui/MyButton';
import { useActions } from '@/store/hooks/useActions';

interface Props extends HTMLAttributes<unknown> {}

const TodoForm: FC<Props> = ({ ...rest }) => {
  const [value, setValue] = useState('');
  const { createTodo, setShow: setShowSnackBar } = useActions();

  const addTodo = () => {
    if (value.trim()) {
      createTodo(value);
      setValue('');
      return;
    }

    setShowSnackBar(true);
  };

  return (
    <form
      className='flex gap-3 justify-center items-center px-2 relative'
      onSubmit={e => e.preventDefault()}
      {...rest}
    >
      <input
        className='shadow px-2 py-1 rounded w-full block focus:outline-none'
        data-testid='input'
        value={value}
        onChange={e => setValue(e.target.value)}
        type='text'
      />
      <MyButton
        className='shadow px-2 py-1 rounded ml-auto'
        data-testid='btn'
        onClick={addTodo}
      >
        Add
      </MyButton>
    </form>
  );
};

export { TodoForm };
