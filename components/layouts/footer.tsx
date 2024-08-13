import { bricolageGrotesque } from '@/app/ui/fonts';

const Footer = () => {
  return (
    <footer className='w-full py-6 text-white'>
      <div className='mx-auto max-w-screen-xl px-4 text-center'>
        <p className='mb-4'>
          &copy; {new Date().getFullYear()} Dmitry Sevryukov. All rights
          reserved.
        </p>
        <div className='flex justify-center space-x-4'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500'
          >
            Twitter
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500'
          >
            GitHub
          </a>
        </div>
        <p className='mt-4'>
          Built with{' '}
          <a
            href='https://nextjs.org'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500'
          >
            Next.js
          </a>{' '}
          and{' '}
          <a
            href='https://tailwindcss.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500'
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
