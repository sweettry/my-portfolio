import { useRouter, usePathname } from 'next/navigation';
import links from '@/lib/links';

const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (direction: 'left' | 'right') => {
    const currentIndex = links.findIndex((link) => link.href === pathname);
    const nextIndex =
      direction === 'left'
        ? (currentIndex - 1 + links.length) % links.length
        : (currentIndex + 1) % links.length;

    const nextLink = links[nextIndex].href;
    router.push(nextLink);
  };

  return navigate;
};

export default useNavigation;
