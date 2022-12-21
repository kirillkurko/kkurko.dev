import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/globalStyle';
import { themes } from '@theme/theme';
import Head from 'next/head';
import Container from '@components/Container';
import { Theme } from '@app-types/theme';
import useDarkMode from 'use-dark-mode';
import ThemeProvider from '@contexts/ThemeContext';
import { Analytics } from '@vercel/analytics/react';

function CustomApp({ Component, pageProps }: AppProps) {
  const mode = useDarkMode(true);
  const [mounted, setMounted] = useState(false);

  const theme = mode.value ? Theme.Dark : Theme.Light;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !mode.value) {
      mode.toggle();
    }
  }, [mounted]);

  return (
    <>
      <Head>
        <title>kkurko.dev</title>
        <meta name='description' content='My personal website' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Analytics />
      <ThemeProvider theme={theme} toggleTheme={mode.toggle}>
        <StyledThemeProvider theme={themes[theme]}>
          <Container>
            <GlobalStyle />
            {mounted && <Component {...pageProps} />}
          </Container>
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
