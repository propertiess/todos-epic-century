import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={clsx(
          'border-2 border-transparent border-opacity-50 focus:border-main active:border-main shadow px-2 py-1 rounded w-full block outline-none',
          className
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);
