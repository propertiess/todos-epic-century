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
            className='fixed right-3 text-white bottom-20 bg-[#FF5964] flex justify-between max-w-xs gap-5 shadow-xl px-2 py-1 rounded items-center font-medium'
            {...fadeInOutRight}
          >
            <p className='break-all'>{title}</p>
            <RemoveIcon className='cursor-pointer w-8 h-8' onClick={close} />
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
