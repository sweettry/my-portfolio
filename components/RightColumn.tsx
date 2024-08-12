'use client';
import { ArrowRight } from 'lucide-react'; // Assuming you have a right arrow icon
import useNavigation from '@/lib/hooks/useNavigation'; // Adjust path as needed

const RightColumn = () => {
  const navigate = useNavigation();

  return (
    <aside className='flex h-full items-center justify-center'>
      <button
        onClick={() => navigate('right')}
        aria-label='Navigate to next section'
        className='focus:outline-none'
      >
        <ArrowRight className='h-6 w-6 cursor-pointer text-white transition-colors hover:text-gray-400' />
      </button>
    </aside>
  );
};

export default RightColumn;
