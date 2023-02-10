import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type Props = PropsWithChildren;

export const Portal = ({ children }: Props) => {
  return createPortal(children, document.body);
};
