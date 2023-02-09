import { forwardRef } from 'react';
import { Portal } from './Portal';

type Props = {
  id: number | null;
  top?: number | string;
  left?: number | string;
  onRemove?: (id: number) => void;
};

export const TodoItemContextMenu = forwardRef<HTMLDivElement, Props>(
  function TodoItemContextMenu({ id, top, left, onRemove }: Props, ref) {
    if (!Boolean(id)) {
      return null;
    }

    const closeContextAndRemoveTodo = () => {
      onRemove?.(id!);
    };

    return (
      <Portal>
        <div
          className='bg-white absolute p-3 shadow w-28'
          style={{
            top,
            left
          }}
          ref={ref}
        >
          <button
            className='text-red-500 font-medium'
            onClick={closeContextAndRemoveTodo}
          >
            Удалить
          </button>
        </div>
      </Portal>
    );
  }
);
