import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<unknown>;

export const Footer = ({ ...rest }: Props) => {
  return (
    <footer className='mt-auto bg-white p-2 text-center font-medium' {...rest}>
      &copy; 2022
    </footer>
  );
};
