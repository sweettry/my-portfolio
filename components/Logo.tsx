import Image from 'next/image';
const Logo = () => {
  return <Image src='/next.svg' alt='Logo' width={100} height={100} priority />;
};
export default Logo;
