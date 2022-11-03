import { FC, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RemoveIcon } from "../ui/icons";
import { useActions } from "@/store/hooks/useActions";
import { fadeInOutRight } from "@/animation";
import styles from "./Snackbar.module.scss";

interface Props {
  title: string;
  isShow: boolean;
}

const Snackbar: FC<Props> = ({ title, isShow }) => {
  const { setShow } = useActions();
  const timerId = useRef<number>();

  const closeHandler = () => {
    setShow(false);
  };

  useEffect(() => {
    timerId.current = setTimeout(() => {
      setShow(false);
    }, 6000);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [isShow]);

  return (
    <AnimatePresence initial={false}>
      {isShow && (
        <motion.div
          className={styles.content}
          {...fadeInOutRight}
          onClick={closeHandler}
        >
          <p>{title}</p>
          <RemoveIcon onClick={closeHandler} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Snackbar };
