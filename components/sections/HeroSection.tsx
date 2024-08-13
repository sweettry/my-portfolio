import { bricolageGrotesque } from '@/app/ui/fonts';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className='w-full py-20 text-white'>
      <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-8'>
        {/* Text Content */}
        <div className='flex w-full flex-col items-center'>
          <h1
            className={`${bricolageGrotesque.className} text-center text-8xl font-bold`}
          >
            It's Dmitry
          </h1>
          <p
            className={`${bricolageGrotesque.className} mt-4 text-center text-6xl font-bold`}
          >
            Full-Stack & Web3 Developer
          </p>
          <p
            className={`${bricolageGrotesque.className} mt-4 text-center text-xl font-bold`}
          >
            Passionate and detail-oriented frontend developer with a knack for
            creating visually appealing and user-friendly web interfaces
          </p>
          <p
            className={`${bricolageGrotesque.className} mt-4 text-center text-xl font-bold`}
          >
            Where creativity meets functionality.
          </p>

          <div className='mt-6 items-center space-x-16'>
            <Button asChild variant='destructive'>
              <Link href='/' className='flex items-center gap-2 text-white'>
                <span className='capitalize'>contact me</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
