import LeftColumn from '@/components/LeftColumn';
import MainContent from '@/components/MainContent';
import RightColumn from '@/components/RightColumn';
import SkillsSection from '../sections/SkillsSection';
type MainContentProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: MainContentProps) => {
  return (
    <main className='container mx-auto flex-1 py-4'>
      <section className='grid grid-cols-[1fr,6fr,1fr] items-center justify-center gap-4'>
        {/* Column 1 - Left column */}
        <div className='flex w-12 items-center justify-center'>
          <LeftColumn />
        </div>

        {/* Column 2 - Main content */}
        <div className='flex justify-center'>
          <div className='h-[680px] w-full md:w-[1220px]'>
            <MainContent>{children}</MainContent>
          </div>
        </div>

        {/* Column 3 - Right column */}
        <div className='flex w-12 items-center justify-center'>
          <RightColumn />
        </div>
      </section>

      {/* <section className=''>
        <SkillsSection />
      </section> */}
    </main>
  );
};

export default Main;
