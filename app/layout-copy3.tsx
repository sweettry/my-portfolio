import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header';
import Main from '@/components/layouts/main';
import Footer from '@/components/layouts/footer';
import BackgroundImage from '@/app/ui/background';
import SkillsSection from '@/components/sections/SkillsSection';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dmitry Sevryukov | Software Engineer & Web Developer',
  description:
    'Passionate software engineer with expertise in web development, AI technologies, and Web3. Explore my projects and connect for collaboration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-custom-gradient relative flex min-h-screen flex-col overflow-hidden text-white'>
        {/* <!-- Main Content --> */}
        <div className='flex-grow'>
          {/* <!-- Your main content goes here --> */}
          <Header />
          <div className='mx-auto mt-16 px-4 pb-16 sm:px-6 sm:pb-24 md:max-w-2xl md:px-4 lg:-mb-12 lg:max-w-6xl lg:px-10 lg:pb-0'>
            {/* <div className='mx-px bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] p-6 shadow-2xl ring-1 ring-white/[0.15] sm:mx-0 sm:rounded-2xl sm:p-8 lg:p-10'> */}
            {/* <div className='mx-auto mt-2 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:mt-6 lg:max-w-7xl lg:px-8'> */}
            <Main>{children}</Main>
            {/* </div> */}
            {/* </div> */}
          </div>

          <SkillsSection />
          <Footer />
        </div>

        {/* <!-- Rotated Border Element --> */}
        <div className='absolute inset-y-[15%] left-[-25%] w-[150%] rotate-12 border-y border-white/5'></div>
      </body>
    </html>
  );
}
