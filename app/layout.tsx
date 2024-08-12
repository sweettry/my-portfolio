import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header';
import Main from '@/components/layouts/main';
import LeftColumn from '@/components/LeftColumn';
import MainContent from '@/components/MainContent';
import RightColumn from '@/components/RightColumn';
import Footer from '@/components/layouts/footer';

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
      <body
        className={`${inter.className} bg-background flex min-h-screen flex-col`}
      >
        <header className='w-full shadow-sm'>
          <Header />
        </header>

        <main className='flex-grow'>
          <Main>{children}</Main>
        </main>

        <footer className='w-full border-t border-cyan-900 p-4'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
