import { useState } from 'react';
import { useActions } from '@/app/store/hooks/useActions';
import { Notification } from '@/shared/components';
import { Button, Input } from '@/shared/ui';

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
        <Input
          data-testid='input'
          value={value}
          onChange={e => setValue(e.target.value)}
          type='text'
        />
        <Button
          className='shadow px-2 py-1 ml-auto'
          data-testid='btn'
          onClick={addTodo}
        >
          Add
        </Button>
      </form>
      <Notification
        title='Введите задачу!'
        isShow={showNotification}
        close={() => setShowNotification(false)}
      />
    </>
  );
};
