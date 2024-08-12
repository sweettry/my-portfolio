'use client';

import { ArrowLeft } from 'lucide-react';
import useNavigation from '@/lib/hooks/useNavigation'; // Adjust path as needed

const LeftColumn = () => {
  const navigate = useNavigation();

  return (
    <aside className='flex h-full items-center justify-center'>
      <button
        onClick={() => navigate('left')}
        aria-label='Navigate to previous section'
        className='focus:outline-none'
      >
        <ArrowLeft className='h-6 w-6 cursor-pointer text-white transition-colors hover:text-gray-400' />
      </button>
    </aside>
  );
};

export default LeftColumn;
