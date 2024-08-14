const Footer = () => {
  return (
    <footer className='w-full py-6'>
      <div className='container flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0'>
        <p className='text-muted-foreground text-xs'>
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <div className='flex gap-4'>{/* Social Icons */}</div>
      </div>
    </footer>
  );
};
export default Footer;
