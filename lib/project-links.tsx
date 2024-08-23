import { AreaChart, Layers, AppWindow } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  // icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: '/projects/web3',
    label: 'web3',
    // icon: <Layers />,
  },
  {
    href: '/projects/nextjs',
    label: 'Next.js',
    // icon: <Layers />,
  },
  {
    href: '/projects/ai',
    label: 'AI',
    // icon: <AppWindow />,
  },
];

export default links;
