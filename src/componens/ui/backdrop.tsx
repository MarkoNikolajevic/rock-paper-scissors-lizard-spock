import { motion } from 'framer-motion';

type BackdropProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <motion.div
      className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/50'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
