import React from 'react';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        'mx-auto my-0 max-w-[700px] pt-8 pb-0 px-[20px]',
        className,
      )}
    >
      <NavBar />
      <main className='py-0'>{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
