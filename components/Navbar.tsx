import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href='/docs' passHref>
              <NavigationMenuLink>Documentation</NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Add more NavigationMenuItems as needed */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navbar;
