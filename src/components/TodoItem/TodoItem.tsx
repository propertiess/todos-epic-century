import { MouseEvent, memo, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { LongPressDetectEvents, useLongPress } from 'use-long-press';
import { fadeInOutDown } from '@/animation';
import { ITodo } from '@/types';

type Props = {
  todo: ITodo;
  isChanged: boolean;
  onContextMenu: (e: MouseEvent<HTMLLIElement>, id: number) => void;
  onChecked: (id: number) => void;
  onChange: (id: number, value: string) => void;
  onCloseChange: () => void;
};

export const TodoItem = memo(function TodoItem({
  todo,
  isChanged,
  onContextMenu,
  onChecked,
  onChange,
  onCloseChange
}: Props) {
  console.log('rerender');

  const [changeTodo, setChangeTodo] = useState(todo.title);
  const inputChangeRef = useRef<HTMLInputElement>(null);

  const onLongPress = useLongPress(
    e => onContextMenu(e as MouseEvent<HTMLLIElement>, todo.id),
    {
      detect: LongPressDetectEvents.TOUCH
    }
  );

  const openContextMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    onContextMenu(e, todo.id);
  };

  useEffect(() => {
    if (isChanged) {
      inputChangeRef.current?.focus();
    }
  }, [isChanged]);

  return (
    <motion.li
      className='flex justify-center items-center gap-5 p-3 rounded hover:bg-[#333] hover:bg-opacity-20'
      onClick={() => {
        !isChanged && onChecked(todo.id);
      }}
      onContextMenu={openContextMenu}
      layout
      {...fadeInOutDown}
      {...onLongPress()}
      data-testid='item'
    >
      {!isChanged ? (
        <>
          <input
            className='cursor-pointer'
            type='checkbox'
            checked={todo.checked}
            readOnly
          />
          <label
            data-testid='todo-label'
            className={clsx(
              'flex-1 break-all',
              todo.checked && 'text-[#738290] line-through'
            )}
          >
            {todo.title}
          </label>
        </>
      ) : (
        <div className='w-full h-full'>
          <input
            ref={inputChangeRef}
            value={changeTodo}
            onChange={e => setChangeTodo(e.target.value)}
          />
          <button onClick={() => onChange(todo.id, changeTodo)}>Change</button>
          <button onClick={onCloseChange}>Cancel</button>
        </div>
      )}
    </motion.li>
  );
});
