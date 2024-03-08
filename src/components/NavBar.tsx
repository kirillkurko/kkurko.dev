'use client';
import NavItem from '@components/NavItem';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import MobileMenu from '@components/MobileMenu';

interface ItemInfo {
  name: string;
  x: number;
  y: number;
  w: string;
}

const NAV_ITEMS: Record<string, ItemInfo> = {
  '/': {
    name: 'Home',
    x: 0,
    y: 0,
    w: '68.67px',
  },
  '/about': {
    name: 'About',
    x: 68.67,
    y: 0,
    w: '70.42px',
  },
  '/blog': {
    name: 'Blog',
    x: 139.09,
    y: 0,
    w: '58.48px',
  },
  '/emoji': {
    name: 'Emoji',
    x: 197.57,
    y: 0,
    w: '65.9px',
  },
};

const NavBar = () => {
  const pathname = usePathname() ?? '';
  const currentPathname = pathname.includes('/blog') ? '/blog' : pathname;

  return (
    <nav className='flex justify-between ml-[-0.60rem]'>
      <div className='flex items-center'>
        {NAV_ITEMS[currentPathname] ? (
          <motion.div
            className='absolute !hidden sm:!block bg-zinc-800 h-[40px] rounded-lg z-[-1]'
            layoutId='nav-items'
            initial={{ opacity: 0, x: NAV_ITEMS[currentPathname].x }}
            animate={{
              opacity: 1,
              x: NAV_ITEMS[currentPathname].x,
              width: NAV_ITEMS[currentPathname].w,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
        <MobileMenu />
        {Object.entries(NAV_ITEMS).map(([path, { name }]) => {
          const isActive = currentPathname === path;
          return (
            <NavItem key={path} href={path} text={name} isActive={isActive} />
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
