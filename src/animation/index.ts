export const fadeInOutRight = {
  initial: {
    opacity: 0,
    x: 300
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: { duration: 0.5 }
  }
};
