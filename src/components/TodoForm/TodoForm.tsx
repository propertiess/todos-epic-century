import { useState } from 'react';
import { MyButton } from '@/components/ui/MyButton';
import { useActions } from '@/store/hooks/useActions';
import { Notification } from '../Notification';

export const TodoForm = () => {
  const [value, setValue] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const { createTodo } = useActions();

  const addTodo = () => {
    if (value.trim()) {
      createTodo(value);
      setValue('');
      return;
    }

    setShowNotification(true);
  };

  return (
    <>
      <form
        className='flex gap-3 justify-center items-center px-2 relative'
        onSubmit={e => e.preventDefault()}
        data-testid='todo-form'
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
      <Notification
        title='Введите задачу!'
        isShow={showNotification}
        close={() => setShowNotification(false)}
      />
    </>
  );
};
