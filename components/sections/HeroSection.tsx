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
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none'>
            Welcome to Our Platform
          </h1>
          <p className='text-muted-foreground max-w-[600px] md:text-xl'>
            Discover amazing features and boost your productivity with our
            innovative solutions.
          </p>
          <div className='flex flex-col gap-2 min-[400px]:flex-row'>
            <Link
              href='#'
              className='bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50'
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='left-8 top-1/2 mx-auto w-[19.25rem] rotate-12 lg:relative lg:w-[25.75rem] lg:-translate-y-1/2'>
            <div className='relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[400px]'>
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
