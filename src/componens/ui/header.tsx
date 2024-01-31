const Header = () => {
  return (
    <header className='border-3 flex items-center justify-between rounded-md border-white/30 py-3 pl-6 pr-3 text-center'>
      <img src='/logo.svg' alt='logo' className='h-12 w-12' />
      <div className='h-full w-20 rounded-md bg-white px-6 py-2.5'>
        <p className='text-xxs text-score font-semibold uppercase'>Score</p>
        <p className='text-dark text-2.5xl font-bold'>12</p>
      </div>
    </header>
  );
};

export default Header;
