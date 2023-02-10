import { memo, MouseEvent } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { LongPressDetectEvents, useLongPress } from 'use-long-press';

import { fadeInOutDown } from '@/animation';
import { ITodo } from '@/shared/types';

type Props = {
  todo: ITodo;
  onContextMenu: (e: MouseEvent<HTMLLIElement>, id: number) => void;
  onChecked: (id: number) => void;
};

export const TodoItem = memo(function TodoItem({
  todo,
  onContextMenu,
  onChecked
}: Props) {
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

  return (
    <motion.li
      className='flex items-center justify-center gap-5 rounded p-3 hover:bg-[#333] hover:bg-opacity-20'
      onClick={() => onChecked(todo.id)}
      onContextMenu={openContextMenu}
      layout
      {...fadeInOutDown}
      {...onLongPress()}
      data-testid='item'
    >
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
    </motion.li>
  );
});
