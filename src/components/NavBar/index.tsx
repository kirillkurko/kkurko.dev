import { useEffect, useState } from 'react';
import NavItem from '@components/NavItem';
import { Theme } from '@app-types/theme';
import { useTheme } from '@hooks/useTheme';
import ToggleThemeIcon from '@components/ToggleThemeIcon';
import { Wrapper, ToggleThemeButton, NavItemsWrapper } from './atoms';

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Wrapper className='ml-[-0.60rem]'>
      <NavItemsWrapper>
        {/*//<MobileMenu />*/}
        <NavItem href='/' text='Home' />
        <NavItem href='/guestbook' text='Guestbook' />
        <NavItem href='/feed' text='Feed' />
        <NavItem href='/blog' text='Blog' />
      </NavItemsWrapper>
      <ToggleThemeButton aria-label='Toggle Dark Mode' onClick={toggleTheme}>
        {mounted && <ToggleThemeIcon isDarkTheme={theme === Theme.Dark} />}
      </ToggleThemeButton>
    </Wrapper>
  );
};

export default NavBar;
