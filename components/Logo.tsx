import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='cursor-pointer text-xl text-white'>
      <span>SweeTTry</span>
      <span className='font-bold text-sky-400'>.dev</span>
    </Link>
  );
};
export default Logo;
