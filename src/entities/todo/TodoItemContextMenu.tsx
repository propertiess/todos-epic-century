import { forwardRef } from 'react';

import { Portal } from '@/shared/components';
import { Button } from '@/shared/ui';

type Props = {
  id: number | null;
  top?: number | string;
  left?: number | string;
  removeItem?: (id: number) => void;
  openEditItem?: (id: number) => void;
};

export const TodoItemContextMenu = forwardRef<HTMLDivElement, Props>(
  function TodoItemContextMenu(
    { id, top, left, removeItem, openEditItem }: Props,
    ref
  ) {
    if (!id) {
      return null;
    }

    const closeContextAndRemoveTodo = () => {
      removeItem?.(id!);
    };

    const closeContextAndEditTodo = () => {
      openEditItem?.(id!);
    };

    return (
      <Portal>
        <div
          className='absolute flex w-28 flex-col gap-3 bg-white p-3 shadow'
          style={{
            top,
            left
          }}
          ref={ref}
        >
          <Button
            className='w-full select-none font-medium'
            onClick={closeContextAndEditTodo}
          >
            Edit
          </Button>
          <Button
            className='w-full select-none font-medium'
            onClick={closeContextAndRemoveTodo}
          >
            Remove
          </Button>
        </div>
      </Portal>
    );
  }
);
