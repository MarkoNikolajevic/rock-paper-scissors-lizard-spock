import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { dropIn } from '@/lib/animations';
import Backdrop from './backdrop';

type ModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setOpenModal }: ModalProps) => {
  return (
    <Backdrop onClick={() => setOpenModal(false)}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className='absolute inset-0 flex flex-col items-center bg-white px-8 pb-16 pt-24'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h2 className='text-dark mb-24 text-3xl font-semibold uppercase'>
          Rules
        </h2>
        <img src='/rules.svg' alt='Rules image' className='h-auto w-full' />
        <button className='mt-32' onClick={() => setOpenModal(false)}>
          <XMarkIcon className='fill-header h-6 w-6' />
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
