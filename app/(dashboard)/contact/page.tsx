import { bricolageGrotesque } from '@/app/ui/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const ContactPage = () => {
  return (
    <div className='max-w-3xl space-y-12 px-6 py-12 text-center'>
      <h1 className={`${bricolageGrotesque.className} mb-4 text-8xl font-bold`}>
        It's Dmitry
        <span className='mt-2 block font-sans text-5xl font-bold text-green-500'>
          Full-Stack Developer
        </span>
        <span className='mt-2 block font-sans text-5xl italic'>
          Exploring Web3
        </span>
      </h1>
      <p className='font-sans text-lg text-gray-400'>
        Passionate full-stack developer building cutting-edge decentralized apps
        and visually stunning portfolios.
      </p>
      <div className='flex justify-center'>
        <Button className='rounded-full bg-green-500 px-6 py-3 font-sans text-lg font-semibold text-white'>
          <Link href='/' className='flex items-center gap-2 text-white'>
            <span className='ml-2 capitalize'>
              discover my work <span className='ml-2'>→</span>
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ContactPage;
