import ProjectsNavbar from '@/components/ProjectsNavbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { fetchProjects } from '@/lib/data';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import clsx from 'clsx';
import Image from 'next/image';
const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const projects = await fetchProjects();

  return (
    <section
      suppressHydrationWarning
      className='container mx-auto h-[65vh] max-w-6xl px-4 text-center md:px-6'
    >
      <div className='grid gap-8 text-white md:grid-cols-[1fr,2fr] md:gap-12 lg:gap-16'>
        {/* First Card: About Me */}
        <Card className='bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] ring-1 ring-white/[0.15]'>
          <CardHeader className='rounded-t-lg'>
            <CardTitle className='text-left text-white'>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='px-6'>
              {projects.map((project, i) => {
                return (
                  <div
                    key={project.id}
                    className={clsx(
                      'flex flex-row items-center justify-between py-4',
                      {
                        'border-t': i !== 0,
                      }
                    )}
                  >
                    <div className='flex items-center text-left'>
                      {/* <Image
                        src={project.image_url}
                        alt={`${project.title}'s profile picture`}
                        className='mr-4 rounded-full'
                        width={32}
                        height={32}
                      /> */}
                      <div className='min-w-0'>
                        <p className='truncate text-sm font-semibold  text-white md:text-base'>
                          {project.title}
                        </p>
                        <p className='hidden text-sm text-gray-500 sm:block'>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            ;
          </CardContent>
          <CardFooter className='text-xl capitalize text-white'>
            {/* You can add more content or buttons here if needed */}
            FOOTER
          </CardFooter>
        </Card>

        {/* Second Card: Image */}
        <Card className='bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] ring-1 ring-white/[0.15]'>
          <CardHeader className='rounded-t-lg'>
            <CardTitle className='text-left text-white'>
              Dynamic Project Title
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl text-white'> {children}</div>

            {/* <Image
              src={MyImage}
              alt='About Me'
              width={150}
              height={150}
              className='max-h-[300px] w-full rounded-lg object-cover object-center'
            /> */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default layout;
