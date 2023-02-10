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
  change: 'change-todo-item',
  close: 'close-change-todo-item'
};

export const ChangeTodoItem = ({
  id,
  title,
  onChange,
  onCloseChange
}: Props) => {
  const [changeTodo, setChangeTodo] = useState(title);
  const inputChangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputChangeRef.current?.focus();
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.nativeEvent as Submitter).submitter.name;

    if (name === submitNames.change) {
      if (!changeTodo.trim()) {
        onCloseChange();
        return;
      }
      onChange(id, changeTodo);
    } else {
      onCloseChange();
    }
  };

  return (
    <motion.div className='h-full w-full p-3' layout>
      <form onSubmit={onSubmit}>
        <Input
          value={changeTodo}
          onChange={e => setChangeTodo(e.target.value)}
          ref={inputChangeRef}
        />
        <div className='mt-5 flex gap-3'>
          <Button className='px-3' name={submitNames.change} type='submit'>
            Change
          </Button>
          <Button className='px-3' name={submitNames.close} type='submit'>
            Cancel
          </Button>
        </div>
      </form>
    </motion.div>
  );
};
