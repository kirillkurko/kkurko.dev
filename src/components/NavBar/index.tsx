import NavItem from '@components/NavItem';
import { Wrapper } from './atoms';

const NavBar = () => {
  return (
    <Wrapper className='ml-[-0.60rem]'>
      {/*//<MobileMenu />*/}
      <NavItem href='/' text='Home' />
      <NavItem href='/blog' text='Blog' />
    </Wrapper>
  );
};

export default NavBar;
