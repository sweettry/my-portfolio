'use client'
import ProjectsNavbar from '@/components/ProjectsNavbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projects } from '@/lib/placeholder-data';
import { usePathname } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import clsx from 'clsx';

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const currentProject = projects.find((project) =>
    pathname.includes(project.id))
  return (
    <section className='container mx-auto h-[65vh] max-w-6xl px-4 text-center md:px-6'>
      <div className='grid gap-8 text-white md:grid-cols-[1fr,2fr] md:gap-12 lg:gap-16'>
        {/* First Column: Project List */}
        <Card className='bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] ring-1 ring-white/[0.15]'>
          <CardHeader className='rounded-t-lg'>
            <CardTitle className='text-left text-white'>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {projects.map((project) => (
                <Button
                  asChild
                  key={project.id}
                  variant={pathname === `/projects/${project.id}` ? 'navPrimary' : 'navSecondary'}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className='grid items-center gap-2 text-xl text-white'
                  >
                    <span className='capitalize'>{project.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter className='text-xl capitalize text-white'>
            {/* Additional footer content can go here if needed */}
            FOOTER
          </CardFooter>
        </Card>

        {/* Second Column: Project Details */}
        <Card className='bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] ring-1 ring-white/[0.15]'>
          <CardHeader className='rounded-t-lg'>
            <CardTitle className='text-left text-white'> 
              {currentProject ? currentProject.title : 'Select a Project'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl text-white'>
              {children ? (
                children
              ) : (
                <p className="text-gray-500">
                  Select a project from the list to view details.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default layout;
