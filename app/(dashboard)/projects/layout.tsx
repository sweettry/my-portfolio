import ProjectsNavbar from '@/components/ProjectsNavbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projects } from '@/lib/placeholder-data';
import { usePathname } from 'next/navigation';
import ProjectsList from '@/components/sections/ProjectsList';
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
  return (
    <section className='container mx-auto h-[65vh] max-w-6xl px-4 text-center md:px-6'>
      <div className='grid gap-8 text-white sm:grid-cols-[1fr] md:grid-cols-[1fr,2fr] md:gap-12 lg:gap-16'>
        {/* First Card: Projects List */}
        <Card className='bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] ring-1 ring-white/[0.15]'>
          <CardHeader className='rounded-t-lg'>
            <CardTitle className='text-left text-white'>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectsList />
          </CardContent>
          <CardFooter className='text-xl capitalize text-white'>
            FOOTER
          </CardFooter>
        </Card>

        {/* Second Card: Project Details */}
        <Card className='bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] ring-1 ring-white/[0.15]'>
          <CardHeader className='rounded-t-lg'>
            <CardTitle className='text-left text-white'>
              {/* You can render the selected project's title here if necessary */}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl text-white'>{children}</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default layout;
