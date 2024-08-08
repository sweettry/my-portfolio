'use client';
import { Button } from './ui/button';

import Link from 'next/link';
import links from '@/lib/links';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className=''>
      {/* <Image src={Logo} alt='logo' className='mx-auto' priority /> */}
      <div className='flex items-center gap-[3rem]'>
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname === link.href ? 'destructive' : 'link'}
            >
              <Link
                href={link.href}
                className='flex items-center gap-x-2 text-white'
              >
                {/* {link.icon} */}
                <span className='capitalize'>{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
