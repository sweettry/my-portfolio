type MainContentProps = {
  children?: React.ReactNode;
};

const MainContent = ({ children }: MainContentProps) => {
  return (
    <main>
      {children || <div className='text-center'>No content available</div>}
    </main>
  );
};

export default MainContent;
