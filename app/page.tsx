import Logo from '../components/Logo';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-t from-indigo-900 via-blue-700 to-blue-400'>
      <header className='mx-48 flex justify-between p-4'>
        <Logo />
        <Navbar />
      </header>
    </main>
  );
}
