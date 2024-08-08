'use client';

import HeroLines from '@/public/assets/hero/hero-lines.png';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id='home'
      className='bg-baseBackground relative z-[50] min-h-screen w-full pt-[4.5rem]'
    >
      <Image
        className='pointer-events-none absolute left-[50%] top-[6.5rem] w-[38rem] -translate-x-1/2 select-none md:top-[50%] md:-translate-y-1/2'
        alt='hero-background'
        src={HeroLines}
        priority
        aria-label='Hero Background Illustration'
      />
    </section>
  );
}
