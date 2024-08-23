'use client';
import { Button } from './ui/button';
import Link from 'next/link';
import links from '@/lib/project-links';
import { usePathname } from 'next/navigation';

const ProjectsNavbar = () => {
  const pathname = usePathname();

  return (
    <div className='flex flex-row items-center gap-12 md:flex-col'>
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
    </div>
  );
};
export default ProjectsNavbar;
