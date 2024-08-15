import LeftColumn from '@/components/LeftColumn';
import MainContent from '@/components/MainContent';
import RightColumn from '@/components/RightColumn';
type MainContentProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: MainContentProps) => {
  return (
    <main className='container mx-auto flex-1 py-4 md:pt-24'>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-[1fr,6fr,1fr]'>
        {/* Column 1 - Hidden on small screens */}
        <div className='hidden md:block'>
          <LeftColumn />
        </div>

        {/* Column 2 - Always visible */}
        <div className='h-[700px]'>
          <MainContent>{children}</MainContent>
        </div>

        {/* Column 3 - Hidden on small screens */}
        <div className='hidden md:block'>
          <RightColumn />
        </div>
      </section>

      <section className='grid grid-cols-2 md:hidden'>
        <div>
          <LeftColumn />
        </div>
        <div>
          <RightColumn />
        </div>
      </section>
    </main>
  );
};

export default Main;
