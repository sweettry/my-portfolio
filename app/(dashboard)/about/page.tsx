import { bricolageGrotesque } from '@/app/ui/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import Image from 'next/image';
import MyImage from '@/public/shin-thant.png';

const AboutPage = () => {
  return (
    <section className='container mx-auto h-[65vh] max-w-6xl px-4 text-center md:px-6'>
      <div className='grid gap-8 text-white md:grid-cols-2 md:gap-12 lg:gap-16'>
        {/* First Card: About Me */}
        <Card className='bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] ring-1 ring-white/[0.15]'>
          <CardHeader className='rounded-t-lg'>
            <CardTitle className='text-left text-white'>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-left text-lg text-slate-400'>
              <p>
                Hi, I am John Doe, a passionate web developer with a love for
                creating beautiful and functional websites. I have been working
                in the industry for the past 5 years, and during this time, I
                have honed my skills in various technologies and frameworks.
              </p>
            </CardDescription>
          </CardContent>
          <CardFooter className='text-xl capitalize text-white'>
            {/* You can add more content or buttons here if needed */}
            <Button className='rounded-full bg-sky-200 px-6 py-4 font-semibold text-slate-900 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900'>
              <Link href='/' className='flex items-center gap-2 text-white'>
                <span className='ml-2 text-lg capitalize text-slate-900'>
                  Resume <span className='ml-2'>→</span>
                </span>
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Second Card: Image */}
        <Card>
          <CardHeader className='rounded-t-lg'>
            <CardTitle>Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={MyImage}
              alt='About Me'
              width={150}
              height={150}
              className='max-h-[300px] w-full rounded-lg object-cover object-center'
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutPage;
