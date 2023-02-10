import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={clsx(
        'rounded border-2 border-transparent bg-main text-white outline-none transition focus:border-white/50 active:border-white/50 active:bg-[#333] active:bg-opacity-20',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
