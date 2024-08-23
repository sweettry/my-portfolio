import ProjectsNavbar from '@/components/ProjectsNavbar';
import { Card } from '@/components/ui/card';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className='container mx-auto h-[65vh] max-w-6xl px-4 text-center md:px-6'>
      <Card className='bg-custom-gradient grid w-full grid-cols-1 gap-8 text-white md:grid-cols-[1fr_4fr] md:gap-12 lg:gap-16'>
        <div className='h-96'>
          <h1>Projects</h1>
          <ProjectsNavbar />
        </div>
        <div className='h-96'>{children}</div>
      </Card>
    </section>
  );
};
export default layout;
