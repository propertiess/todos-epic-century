import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, ...rest },
  ref
) {
  return (
    <input
      className={clsx(
        'block w-full rounded border-2 border-transparent border-opacity-50 px-2 py-1 shadow outline-none focus:border-main active:border-main',
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});
