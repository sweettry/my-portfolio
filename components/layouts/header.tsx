import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className='flex h-16 w-full items-center justify-between px-4 md:px-6'>
      <Logo />
      <nav className='hidden flex-1 justify-center gap-4 sm:gap-6 lg:flex'>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
