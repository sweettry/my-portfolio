import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <div className='mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2'>
      <Logo />
      <nav className='hidden lg:flex lg:items-center lg:gap-4'>
        <Navbar />
      </nav>
    </div>
  );
};

export default Header;
