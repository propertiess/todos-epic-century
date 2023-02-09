import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<unknown> {}

const Footer: FC<Props> = ({ ...rest }) => {
  return (
    <footer className='mt-auto p-2 bg-white font-medium text-center' {...rest}>
      &copy; 2022
    </footer>
  );
};

export { Footer };
