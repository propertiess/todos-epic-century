import { useEffect, useRef } from 'react';

export const useTimerForAutoHide = <T>(
  deps: T,
  close: () => void,
  delay: number
) => {
  const timerId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!deps) return;

    timerId.current = setTimeout(() => {
      close();
    }, delay);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [deps]);
};
