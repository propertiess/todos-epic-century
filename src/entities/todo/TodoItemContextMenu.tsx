import { forwardRef } from 'react';

import { Portal } from '@/shared/components';

type Props = {
  id: number | null;
  top?: number | string;
  left?: number | string;
  onRemove?: (id: number) => void;
  onChange?: (id: number) => void;
};

export const TodoItemContextMenu = forwardRef<HTMLDivElement, Props>(
  function TodoItemContextMenu(
    { id, top, left, onRemove, onChange }: Props,
    ref
  ) {
    if (!id) {
      return null;
    }

    const closeContextAndRemoveTodo = () => {
      onRemove?.(id!);
    };

    const closeContextAndChangeTodo = () => {
      onChange?.(id!);
    };

    return (
      <Portal>
        <div
          className='absolute w-28 bg-white p-3 shadow'
          style={{
            top,
            left
          }}
          ref={ref}
        >
          <button
            className='select-none font-medium'
            onClick={closeContextAndChangeTodo}
          >
            Change
          </button>
          <button
            className='select-none font-medium text-red-500'
            onClick={closeContextAndRemoveTodo}
          >
            Remove
          </button>
        </div>
      </Portal>
    );
  }
);
