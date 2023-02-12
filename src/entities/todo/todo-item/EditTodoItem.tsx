import { FormEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { Button, Input } from '@/shared/ui';

type Props = {
  id: number;
  title: string;
  onChange: (id: number, value: string) => void;
  onCloseChange: () => void;
};

type Submitter = Event & {
  submitter: HTMLButtonElement;
};

const submitNames = {
  edit: 'edit-todo-item',
  close: 'close-edit-todo-item'
};

export const EditTodoItem = ({ id, title, onChange, onCloseChange }: Props) => {
  const [editTodo, setEditTodo] = useState(title);
  const inputChangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputChangeRef.current?.focus();
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.nativeEvent as Submitter).submitter.name;

    if (name === submitNames.edit) {
      if (!editTodo.trim()) {
        onCloseChange();
        return;
      }
      onChange(id, editTodo);
    } else {
      onCloseChange();
    }
  };

  return (
    <motion.div className='h-full w-full p-3' layout>
      <form onSubmit={onSubmit}>
        <Input
          value={editTodo}
          onChange={e => setEditTodo(e.target.value)}
          ref={inputChangeRef}
        />
        <div className='mt-5 flex gap-3'>
          <Button className='px-3' name={submitNames.edit} type='submit'>
            Edit
          </Button>
          <Button className='px-3' name={submitNames.close} type='submit'>
            Cancel
          </Button>
        </div>
      </form>
    </motion.div>
  );
};
