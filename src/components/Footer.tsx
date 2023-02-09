import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<unknown>;

export const Footer = ({ ...rest }: Props) => {
  return (
    <footer className='mt-auto p-2 bg-white font-medium text-center' {...rest}>
      &copy; 2022
    </footer>
  );
};
