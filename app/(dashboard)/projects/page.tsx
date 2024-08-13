import { bricolageGrotesque } from '@/app/ui/fonts';

const ProjectsPage = () => {
  return (
    <div className='w-full py-20 text-white'>
      <div className='mx-auto max-w-screen-xl px-4'>
        <h1
          className={`${bricolageGrotesque.className} mb-8 text-center text-6xl font-bold`}
        >
          Projects
        </h1>
        <p className='mb-8 text-center text-lg'>
          Here are some of the projects I've worked on. Each project showcases a
          different aspect of my skills and expertise.
        </p>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Project Card 1 */}
          <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
            <div className='h-40 w-full bg-gray-300'></div>{' '}
            {/* Placeholder for project image */}
            <div className='p-6'>
              <h2 className='mb-2 text-2xl font-bold'>Project Title 1</h2>
              <p className='text-gray-600'>
                Brief description of the project goes here. This should give a
                quick overview of what the project is about.
              </p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
            <div className='h-40 w-full bg-gray-300'></div>{' '}
            {/* Placeholder for project image */}
            <div className='p-6'>
              <h2 className='mb-2 text-2xl font-bold'>Project Title 2</h2>
              <p className='text-gray-600'>
                Brief description of the project goes here. This should give a
                quick overview of what the project is about.
              </p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
            <div className='h-40 w-full bg-gray-300'></div>{' '}
            {/* Placeholder for project image */}
            <div className='p-6'>
              <h2 className='mb-2 text-2xl font-bold'>Project Title 3</h2>
              <p className='text-gray-600'>
                Brief description of the project goes here. This should give a
                quick overview of what the project is about.
              </p>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
