import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface Props extends HTMLAttributes<unknown> {}

const MyButton: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'text-white bg-[#35A7FF] border-none w-[100px] active:bg-[#333] active:bg-opacity-20 transition',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export { MyButton };
