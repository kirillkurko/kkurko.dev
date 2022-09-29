import React from 'react';
import NavBar from '@components/NavBar';
import { Wrapper, Main } from './atoms';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <Wrapper>
      <NavBar />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Container;
