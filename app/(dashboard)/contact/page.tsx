import { bricolageGrotesque } from '@/app/ui/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import MyImage from '@/public/assets/book.5380927448c9872170bbc9fc9e5828c4.png';
const ContactPage = () => {
  return (
    <div className='mx-auto grid max-w-5xl grid-cols-[4fr,1fr] space-y-12 px-6 py-12 text-center'>
      <div className=''>
        <h2 className='text-bold block text-left font-sans text-5xl not-italic text-sky-200 md:text-7xl'>
          Make your ideas look awesome...
        </h2>

        <p className='mt-6 max-w-3xl text-2xl leading-[2.5rem] tracking-tight text-sky-200 sm:text-center'>
          Passionate about building cutting-edge and visually stunning apps.
        </p>
        <div className='flex justify-center pt-6'>
          <Button className='rounded-full bg-sky-300 px-6 py-2 font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900'>
            <Link href='/' className='flex items-center gap-2 text-white'>
              <span className='ml-2 text-lg capitalize text-slate-900'>
                contact me <span className='ml-2'>→</span>
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className='relative mt-24 flex-none lg:mt-0 lg:w-80'>
        <div className='left-8 top-1/2 mx-auto w-[19.25rem] rotate-12 lg:relative lg:w-[25.75rem] lg:-translate-y-1/2'>
          <Image src={MyImage} alt='fsd' />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
