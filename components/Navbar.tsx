'use client';
import { Button } from './ui/button';
import Link from 'next/link';
import links from '@/lib/links';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-12'>
      {links.map((link) => (
        <Button
          asChild
          key={link.href}
          variant={pathname === link.href ? 'destructive' : 'link'}
        >
          <Link href={link.href} className='flex items-center gap-2 text-white'>
            <span className='capitalize'>{link.label}</span>
          </Link>
        </Button>
      ))}
    </nav>
  );
};
export default Navbar;
