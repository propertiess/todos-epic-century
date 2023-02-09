import { FC } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { LongPressDetectEvents, useLongPress } from 'use-long-press';
import { fadeInOutDown } from '@/animation';
import { ITodo } from '@/interfaces/todo.interface';
import { useActions } from '@/store/hooks/useActions';

interface Props {
  todo: ITodo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const { toggleChecked, setShowContextMenu } = useActions();

  const onLongPress = useLongPress(() => setShowContextMenu(todo.id), {
    detect: LongPressDetectEvents.TOUCH
  });

  const toggle = () => {
    setShowContextMenu(null);
    toggleChecked(todo.id);
  };

  const openContextMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setShowContextMenu(todo.id);
  };

  return (
    <motion.li
      className='flex justify-center items-center gap-5 p-3 rounded'
      onClick={toggle}
      onContextMenu={openContextMenu}
      layout
      // {...fadeInOutDown}
      // {...onLongPress()}
      whileHover={{
        background: 'black'
      }}
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
};

export { TodoItem };
