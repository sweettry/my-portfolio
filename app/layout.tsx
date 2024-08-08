import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dmitry Sevryukov | Software Engineer & Web Developer',
  description:
    'Passionate software engineer with expertise in web development, AI technologies, and Ethereum. Explore my projects and connect for collaboration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-background flex h-screen flex-col '>
        <main className='flex h-auto min-h-[4.5rem] w-full items-center px-[5%] shadow-sm dark:bg-transparent'>
          <Header />
        </main>
        <div className='grid flex-grow grid-cols-5 gap-4 p-4'>
          <div className='col-span-1 border-2 border-cyan-900'>Left Column</div>
          <div className='col-span-3 border-2 border-cyan-900'>{children}</div>
          <div className='col-span-1 border-2 border-cyan-900'>
            Right Column
          </div>
        </div>
        <div className='flex h-16 items-center justify-center border-2 border-cyan-900 p-4'>
          <div className='text-white'>Footer Content</div>
        </div>
      </body>
    </html>
  );
}
