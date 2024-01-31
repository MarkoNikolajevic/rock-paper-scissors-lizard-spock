import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/componens/ui/header';
import Button from '@/componens/ui/button';
import Modal from '@/componens/ui/modal';

const App = () => {
  const [modalOpen, setOpenModal] = useState(false);

  return (
    <main className='bg-body relative flex h-screen max-h-screen flex-col items-center justify-between px-8 pb-14 pt-8'>
      <Header />
      <Button
        label='Rules'
        variant='outline'
        className='max-w-32'
        onClick={() => setOpenModal(true)}
      />
      <AnimatePresence>
        {modalOpen && <Modal setOpenModal={setOpenModal} />}
      </AnimatePresence>
    </main>
  );
};

export default App;
