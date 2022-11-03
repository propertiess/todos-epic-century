import { useEffect, useRef } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const useTimerForAutoHide = <T>(
  deps: T,
  action: ActionCreatorWithPayload<boolean, string>,
  delay: number
) => {
  const timerId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!deps) return;

    timerId.current = setTimeout(() => {
      action(false);
    }, delay);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [deps]);
};
