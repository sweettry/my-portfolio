import { bricolageGrotesque } from '@/app/ui/fonts';
import { Button } from '../ui/button';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <div className='mx-auto space-y-12 px-6 py-12 text-center'>
      <h1 className='bold mt-2 block bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text pt-6 text-left font-sans text-5xl italic leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] md:text-7xl lg:text-left'>
        Make your ideas look awesome...
      </h1>

      <h2
        className={`${bricolageGrotesque.className} text-bold block font-sans text-5xl not-italic text-sky-200 md:text-8xl`}
      >
        Dmitry Sevryukov
        <span className='mt-2 block font-sans text-3xl font-bold text-green-500 md:text-5xl'>
          Full-Stack Developer
        </span>
      </h2>

      <p className='mt-6 max-w-3xl text-2xl leading-[2.5rem] tracking-tight text-sky-200 sm:text-center'>
        Passionate about building cutting-edge and visually stunning apps.
      </p>
      <div className='flex justify-center pt-6'>
        <Button className='rounded-full bg-sky-300 px-6 py-2 font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900'>
          <Link href='/' className='flex items-center gap-2 text-white'>
            <span className='ml-2 text-lg  capitalize text-slate-900 '>
              contact me <span className='ml-2'>→</span>
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
