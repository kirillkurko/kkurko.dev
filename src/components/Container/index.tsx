import React from 'react';
import NavBar from '@components/NavBar';
import { Wrapper, Main } from './atoms';
import Footer from '@components/Footer';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <Wrapper>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Container;
