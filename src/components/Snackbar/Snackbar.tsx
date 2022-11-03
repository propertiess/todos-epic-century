import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInOutRight } from '@/animation';
import { useTimerForAutoHide } from '@/hooks/useTimerForAutoHide';
import { useActions } from '@/store/hooks/useActions';
import { RemoveIcon } from '../ui/icons';
import styles from './Snackbar.module.scss';

interface Props {
  title: string;
  isShow: boolean;
}

const Snackbar: FC<Props> = ({ title, isShow }) => {
  const { setShow } = useActions();

  const closeHandler = () => {
    setShow(false);
  };

  useTimerForAutoHide(isShow, setShow, 6000);

  return (
    <AnimatePresence initial={false}>
      {isShow && (
        <motion.div className={styles.content} {...fadeInOutRight}>
          <p>{title}</p>
          <RemoveIcon onClick={closeHandler} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Snackbar };
