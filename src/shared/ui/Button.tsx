import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={clsx(
        'text-white bg-main border-2 border-transparent outline-none focus:border-white/50 active:border-white/50 active:bg-[#333] active:bg-opacity-20 transition rounded',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
