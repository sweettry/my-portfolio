import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className='grid w-full grid-cols-8 items-center md:grid-cols-12 '>
      <div className='col-span-4'>
        <Logo />
      </div>
      <div className='col-span-4 m-auto hidden md:block'>
        <div className='flex items-center gap-[3rem]'>
          <Navbar />
        </div>
      </div>
    </header>
  );
};
export default Header;
