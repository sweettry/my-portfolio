import { AreaChart, Layers, AppWindow } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  // icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: '/',
    label: 'Home',
    // icon: <Layers />,
  },
  {
    href: '/about',
    label: 'About',
    // icon: <Layers />,
  },
  {
    href: '/projects',
    label: 'Projects',
    // icon: <AppWindow />,
  },
  {
    href: '/contact',
    label: 'Contact Me',
    // icon: <AreaChart />,
  },
];

export default links;
