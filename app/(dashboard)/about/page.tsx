import { bricolageGrotesque } from '@/app/ui/fonts';
import Image from 'next/image';
import MyImage from '@/public/shin-thant.png';

const AboutPage = () => {
  return (
    <div className='w-full py-20 text-white'>
      <div className='mx-auto max-w-screen-xl px-4'>
        <h1
          className={`${bricolageGrotesque.className} mb-8 text-center text-6xl font-bold`}
        >
          About Me
        </h1>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* First Column (Span 2/3) */}
          <div className='md:col-span-2'>
            <h2
              className={`${bricolageGrotesque.className} mb-4 text-4xl font-bold`}
            >
              Welcome!
            </h2>
            <p className='mb-4 text-lg'>
              Hi, I'm Dmitry Sevryukov. I'm a Full-Stack & Web3 Developer with a
              passion for creating engaging and user-friendly web applications.
              I focus on delivering high-quality solutions and am always eager
              to explore new technologies.
            </p>
            <p className='mb-4 text-lg'>
              With a background in both frontend and backend development, I
              bring creativity and technical expertise to every project. My goal
              is to build applications that are not only functional but also
              visually appealing.
            </p>
          </div>

          {/* Second Column (Span 1/3) */}
          <div className='relative flex items-center justify-center md:col-span-1'>
            {/* Green Square Container */}
            <div className='absolute bottom-0 right-0 h-72 w-72 rounded-lg bg-green-500'>
              {/* Inner border for design effect */}
              <div className='absolute inset-0 border-8 border-green-700 border-transparent'></div>
            </div>
            {/* Image */}
            <Image
              src={MyImage}
              alt='Dmitry Sevryukov'
              width={300} // Adjust size as needed
              height={300} // Adjust size as needed
              className='relative z-10 rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
