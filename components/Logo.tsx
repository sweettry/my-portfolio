import Link from 'next/link';
const Logo = () => {
  return (
    <Link href='/' className='text-xl'>
      <span className='cursor-pointer text-white'>SweeTTry</span>
      <span className='font-bold text-green-400 '>.dev</span>
    </Link>
  );
};
export default Logo;
