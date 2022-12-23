import { useEffect, useState } from 'react';
import NavItem from '@components/NavItem';
import { Theme } from '@app-types/theme';
import { useTheme } from 'next-themes';
import ToggleThemeIcon from '@components/ToggleThemeIcon';

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className='flex justify-between ml-[-0.60rem]'>
      <div className='flex'>
        {/*//<MobileMenu />*/}
        <NavItem href='/' text='Home' />
        <NavItem href='/guestbook' text='Guestbook' />
        <NavItem href='/feed' text='Feed' />
        <NavItem href='/blog' text='Blog' />
      </div>
      <button
        className='w-9 h-9 rounded-lg border-none cursor-pointer flex items-center justify-center bg-gray-200 dark:bg-zinc-700'
        aria-label='Toggle Dark Mode'
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <ToggleThemeIcon isDarkTheme={resolvedTheme === Theme.Dark} />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
