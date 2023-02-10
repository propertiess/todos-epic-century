import { AnimatePresence, motion } from 'framer-motion';

import { fadeInOutRight } from '@/animation';
import { useTimerForAutoHide } from '@/shared/hooks/useTimerForAutoHide';
import { RemoveIcon } from '@/shared/ui';

import { Portal } from './Portal';

interface Props {
  title: string;
  isShow: boolean;
  close: () => void;
}

export const Notification = ({ title, isShow, close }: Props) => {
  useTimerForAutoHide(isShow, close, 6000);

  return (
    <Portal>
      <AnimatePresence initial={false}>
        {isShow && (
          <motion.div
            className='fixed right-3 bottom-20 flex max-w-xs items-center justify-between gap-5 rounded bg-[#FF5964] px-2 py-1 font-medium text-white shadow-xl'
            {...fadeInOutRight}
          >
            <p className='break-all'>{title}</p>
            <RemoveIcon className='h-8 w-8 cursor-pointer' onClick={close} />
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
