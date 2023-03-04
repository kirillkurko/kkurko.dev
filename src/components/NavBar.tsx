import NavItem from '@components/NavItem';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
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
  '/guestbook': {
    name: 'Guestbook',
    x: 68.67,
    y: 0,
    w: '107.06px',
  },
  '/emoji': {
    name: 'Emoji',
    x: 175.73,
    y: 0,
    w: '65.9px',
  },
  '/blog': {
    name: 'Blog',
    x: 241.63,
    y: 0,
    w: '58.48px',
  },
};

const NavBar = () => {
  const router = useRouter();
  const pathname = router.pathname.includes('/blog')
    ? '/blog'
    : router.pathname;

  return (
    <nav className='flex justify-between ml-[-0.60rem]'>
      <div className='flex items-center'>
        {NAV_ITEMS[pathname] ? (
          <motion.div
            className='absolute !hidden sm:!block bg-zinc-800 h-[40px] rounded-lg z-[-1]'
            layoutId='nav-items'
            initial={{ opacity: 0, x: NAV_ITEMS[pathname].x }}
            animate={{
              opacity: 1,
              x: NAV_ITEMS[pathname].x,
              width: NAV_ITEMS[pathname].w,
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
          const isActive = pathname === path;
          return (
            <NavItem key={path} href={path} text={name} isActive={isActive} />
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
