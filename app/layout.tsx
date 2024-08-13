import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header';
import Main from '@/components/layouts/main';
import Footer from '@/components/layouts/footer';
import BackgroundImage from '@/app/ui/background';
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
        <BackgroundImage />

        {/* Content */}
        <header className='z-10 h-16 w-full shadow-sm'>
          <Header />
        </header>

        <main className='z-10 flex-grow'>
          <Main>{children}</Main>
        </main>

        <footer className='z-10 h-16 w-full p-4'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
