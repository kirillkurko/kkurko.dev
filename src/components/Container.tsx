import React from 'react';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className='mx-auto my-0 max-w-[700px] pt-8 pb-0 px-[20px]'>
      <NavBar />
      <main className='py-0'>{children}</main>
      <Footer />
    </div>
  );
}

export default Container;
