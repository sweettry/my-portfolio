import LeftColumn from '@/components/LeftColumn';
import MainContent from '@/components/MainContent';
import RightColumn from '@/components/RightColumn';
import SkillsSection from '../sections/SkillsSection';
import Link from 'next/link';
import Image from 'next/image';
import MyImage from '@/public/assets/book.5380927448c9872170bbc9fc9e5828c4.png';
type MainContentProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: MainContentProps) => {
  return (
    <main className='min-h-screen w-full py-12 md:py-24 lg:py-32 xl:py-24'>
      {children || <div className='text-center'>No content available</div>}
      <SkillsSection />
    </main>
  );
};

export default Main;
