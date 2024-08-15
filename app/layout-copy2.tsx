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
      <body className='flex min-h-screen flex-col'>
        <Header />
        <Main>{children}</Main>
        <SkillsSection />
        <Footer />
      </body>
    </html>
  );
}
