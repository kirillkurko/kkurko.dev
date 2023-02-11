import NavItem from '@components/NavItem';

const NavBar = () => {
  return (
    <nav className='flex justify-between ml-[-0.60rem]'>
      <div className='flex'>
        <NavItem href='/' text='Home' />
        {/*<NavItem href='/guestbook' text='Guestbook' />*/}
        <NavItem href='/emoji' text='Emoji' />
        <NavItem href='/blog' text='Blog' />
      </div>
    </nav>
  );
};

export default NavBar;
