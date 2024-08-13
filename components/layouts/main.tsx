import LeftColumn from '@/components/LeftColumn';
import MainContent from '@/components/MainContent';
import RightColumn from '@/components/RightColumn';
import SkillsSection from '../sections/SkillsSection';

type MainContentProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: MainContentProps) => {
  return (
    <div className='flex w-full flex-col'>
      {/* Hero Section */}
      <div className='flex w-full flex-col lg:flex-row'>
        {/* Columns container */}
        <div className='flex h-[calc(100vh-16rem)] w-full flex-row'>
          {/* Left Column */}
          <div className='hidden lg:block lg:w-1/5'>
            <LeftColumn />
          </div>

          {/* Main Content */}
          <section className='flex flex-1 items-center justify-center p-4 py-20 text-white'>
            <MainContent>{children}</MainContent>
          </section>

          {/* Right Column */}
          <div className='hidden lg:block lg:w-1/5'>
            <RightColumn />
          </div>
        </div>
      </div>
      {/* SmallScreenColumns */}
      <div className='flex w-full md:hidden'>
        <div className='w-1/2'>
          <LeftColumn />
        </div>
        <div className='w-1/2'>
          <RightColumn />
        </div>
      </div>
      {/* Skills Section */}
      <section className='w-full p-4'>
        <SkillsSection />
      </section>
    </div>
  );
};

export default Main;
