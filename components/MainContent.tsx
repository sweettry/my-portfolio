import { Separator } from '@/components/ui/separator';

type MainContentProps = {
  children?: React.ReactNode;
};

const MainContent = ({ children }: MainContentProps) => {
  return (
    <div>
      <Separator className='opacity-15' />
      {children || <div className='text-center'>No content available</div>}
      <Separator className='opacity-15' />
    </div>
  );
};

export default MainContent;
