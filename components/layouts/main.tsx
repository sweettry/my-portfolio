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
      <div className='flex w-full'>
        <div className='hidden w-1/5 lg:block'>
          <LeftColumn />
        </div>

        <section className='flex w-full items-center justify-center border-2 border-cyan-900 p-4 py-20 text-white lg:w-3/5'>
          <MainContent>{children}</MainContent>
        </section>

        <div className='hidden w-1/5 lg:block'>
          <RightColumn />
        </div>
      </div>

      <section className='mt-4 w-full border-2 border-cyan-900 p-4'>
        <SkillsSection />
      </section>
    </div>
  );
};

export default Main;
