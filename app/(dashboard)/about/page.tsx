import { bricolageGrotesque } from '@/app/ui/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import MyImage from '@/public/shin-thant.png';

const AboutPage = () => {
  return (
    <section className='container mx-auto h-[65vh] max-w-6xl px-4 text-center md:px-6 '>
      <Card className='w-full'>
        <CardContent className='bg-custom-gradient grid grid-cols-1 gap-8 text-white md:grid-cols-2 md:gap-12 lg:gap-16'>
          {/* Top-left: About Me text */}
          <div className='prose'>
            <h2 className='mt-4 text-xl font-semibold'>About Me</h2>
            <p className='text-left'>
              Hi, I'm John Doe, a passionate web developer with a love for
              creating beautiful and functional websites. I have been working in
              the industry for the past 5 years, and during this time, I have
              honed my skills in various technologies and frameworks.
            </p>
          </div>

          {/* Top-right: Image */}
          <div className='flex items-center justify-center'>
            <Image
              src={MyImage}
              alt='About Me'
              width={250}
              height={250}
              className='max-h-[300px] w-full rounded-lg object-cover object-center'
            />
          </div>

          {/* Bottom row: Generic content spanning both columns */}
          <div className='prose col-span-1 md:col-span-2'>
            <p>
              In my free time, I enjoy exploring new technologies, contributing
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutPage;
