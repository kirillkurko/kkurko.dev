import React from 'react';
import NavBar from '@components/NavBar';
import { Main, Wrapper } from './atoms';
import Footer from '@components/Footer';
import { ThemeProvider } from 'styled-components';
import { useTheme } from 'next-themes';
import { themes } from '@theme/theme';
import { Theme } from '@app-types/theme';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={themes[(theme as unknown as Theme) ?? Theme.Dark]}>
      <Wrapper>
        <NavBar />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Container;
