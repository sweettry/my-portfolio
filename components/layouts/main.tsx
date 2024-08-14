import LeftColumn from '@/components/LeftColumn';
import MainContent from '@/components/MainContent';
import RightColumn from '@/components/RightColumn';
type MainContentProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: MainContentProps) => {
  return (
    <main className='grid flex-1 grid-rows-[1fr,auto] gap-6 md:grid-cols-3 md:grid-rows-[1fr] md:pt-24'>
      <div className='hidden h-[500px]  md:block'>
        <LeftColumn />
      </div>

      <div className='h-[500px]'>
        <MainContent>{children}</MainContent>
      </div>

      <div className='hidden h-[500px] md:block'>
        <RightColumn />
      </div>

      <div className='grid h-[500px] grid-cols-2 gap-6 md:hidden'>
        <div>
          <LeftColumn />
        </div>
        <div>
          <RightColumn />
        </div>
      </div>
    </main>
  );
};

export default Main;
