import { bricolageGrotesque } from '@/app/ui/fonts';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import MyImage from '@/public/assets/book.5380927448c9872170bbc9fc9e5828c4.png';

export default function HeroSection() {
  return (
    <section className='container mx-auto h-[65vh] max-w-6xl px-4 md:px-6'>
      <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16'>
        <div className='flex flex-col justify-center space-y-4'>
          <h1 className='text-3xl font-bold tracking-tighter text-sky-400 sm:text-4xl md:text-5xl xl:text-6xl/none'>
            Make your ideas look awesome...
          </h1>
          <p className='text-muted-foreground max-w-[600px] pt-4 text-sky-200 md:text-xl'>
            Passionate about building cutting-edge and visually stunning apps.
          </p>
          <div className='flex flex-col gap-2 pt-6 min-[400px]:flex-row'>
            <Button className='rounded-full bg-sky-300 px-6 py-4 font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900'>
              <Link href='/' className='flex items-center gap-2 text-white'>
                <span className='ml-2 text-lg capitalize text-slate-900'>
                  contact me <span className='ml-2'>→</span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='left-8 top-1/2 mx-auto w-[19.25rem] rotate-12 lg:relative lg:w-[25.75rem] lg:-translate-y-1/2'>
            <div className='relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[350px]'>
              <Image
                src={MyImage}
                alt='Hero Image'
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
