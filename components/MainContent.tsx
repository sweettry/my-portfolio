type MainContentProps = {
  children?: React.ReactNode;
};

const MainContent = ({ children }: MainContentProps) => {
  return (
    <div>
      {children || <div className='text-center'>No content available</div>}
    </div>
  );
};

export default MainContent;
