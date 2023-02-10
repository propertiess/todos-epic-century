import { useEffect, useRef, useState } from 'react';

type Props = {
  id: number;
  title: string;
  onChange: (id: number, value: string) => void;
  onCloseChange: () => void;
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

  return (
    <div className='w-full h-full p-3'>
      <input
        ref={inputChangeRef}
        value={changeTodo}
        onChange={e => setChangeTodo(e.target.value)}
      />
      <button
        onClick={() => {
          if (!changeTodo.trim()) {
            return;
          }
          onChange(id, changeTodo);
        }}
      >
        Change
      </button>
      <button onClick={onCloseChange}>Cancel</button>
    </div>
  );
};
