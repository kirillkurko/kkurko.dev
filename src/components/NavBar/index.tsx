import NavItem from '@components/NavItem';
import { Wrapper, NavItemsWrapper } from './atoms';

const NavBar = () => {
  return (
    <Wrapper className='ml-[-0.60rem]'>
      <NavItemsWrapper>
        {/*//<MobileMenu />*/}
        <NavItem href='/' text='Home' />
        <NavItem href='/guestbook' text='Guestbook' />
        <NavItem href='/feed' text='Feed' />
        <NavItem href='/blog' text='Blog' />
      </NavItemsWrapper>
      {/*<ToggleThemeButton aria-label='Toggle Dark Mode' onClick={toggleTheme}>*/}
      {/*  {mounted && <ToggleThemeIcon isDarkTheme={theme === Theme.Dark} />}*/}
      {/*</ToggleThemeButton>*/}
    </Wrapper>
  );
};

export default NavBar;
