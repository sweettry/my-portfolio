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
        {/* <ArrowLeft className='h-6 w-6 cursor-pointer text-white transition-colors hover:text-gray-400' /> */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='size-14 text-sky-300'
        >
          <path
            fillRule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </aside>
  );
};

export default LeftColumn;
