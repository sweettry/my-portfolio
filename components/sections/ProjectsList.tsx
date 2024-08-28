'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projects } from '@/lib/placeholder-data';

export default function ProjectsList() {
  const pathname = usePathname();

  return (
    <div className='grid px-6'>
      {projects.map((project) => (
        <Button
          asChild
          key={project.id}
          variant={
            pathname.includes(project.id) ? 'navPrimary' : 'navSecondary'
          }
        >
          <Link
            href={`/projects/${project.id}`}
            className='flex items-center justify-between gap-2 text-sm text-white md:text-base'
          >
            <div className='flex items-center'>
              <div className='min-w-0'>
                <p className='truncate font-semibold text-white'>
                  {project.title}
                </p>
                <p className='hidden text-sm text-gray-500 sm:block'>
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        </Button>
      ))}
    </div>
  );
}
