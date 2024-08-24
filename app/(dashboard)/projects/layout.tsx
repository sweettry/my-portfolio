import ProjectsNavbar from '@/components/ProjectsNavbar';
import { Card } from '@/components/ui/card';
import { fetchProjects } from '@/lib/data';
import clsx from 'clsx';
import Image from 'next/image';
const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const projects = await fetchProjects();

  return (
    <section className='container mx-auto h-[65vh] max-w-6xl px-4 text-center md:px-6'>
      <Card className='bg-custom-gradient grid w-full grid-cols-1 gap-8 text-white md:grid-cols-[1fr_4fr] md:gap-12 lg:gap-16'>
        <div className='h-96'>
          <h1>Projects</h1>
          <div className='bg-white px-6'>
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
                  <div className='flex items-center'>
                    <Image
                      src={project.image_url}
                      alt={`${project.title}'s profile picture`}
                      className='mr-4 rounded-full'
                      width={32}
                      height={32}
                    />
                    <div className='min-w-0'>
                      <p className='truncate text-sm font-semibold text-black md:text-base'>
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
          <ProjectsNavbar />
        </div>
        <div className='h-96'>{children}</div>
      </Card>
    </section>
  );
};
export default layout;
