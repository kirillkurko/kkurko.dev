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
    w: '68.1px',
  },
  '/about': {
    name: 'About',
    x: 68.1,
    y: 0,
    w: '69.34px',
  },
  '/blog': {
    name: 'Blog',
    x: 137.44,
    y: 0,
    w: '57.74px',
  },
  '/emoji': {
    name: 'Emoji',
    x: 195.18,
    y: 0,
    w: '64.95px',
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
