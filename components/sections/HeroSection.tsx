'use client';

import HeroLines from '@/public/assets/hero/hero-lines.png';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className='w-full py-20 text-white'>
      <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-8'>
        {/* Text Content */}
        <div className='flex w-full flex-col items-center'>
          <h1 className='text-center text-4xl font-bold'>
            Welcome to Our Platform
          </h1>
          <p className='mt-4 text-center text-lg'>
            Discover amazing features that will enhance your productivity and
            help you achieve your goals faster.
          </p>
          <div className='mt-6 flex flex-col items-center space-y-4'>
            <a
              href='#'
              className='inline-block rounded bg-green-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-green-600'
            >
              Get Started
            </a>
            <a
              href='#'
              className='inline-block rounded bg-white px-8 py-3 text-lg font-semibold text-gray-900 transition hover:bg-gray-200'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
