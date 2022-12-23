import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '@theme/theme';
import Head from 'next/head';
import Container from '@components/Container';
import { Theme } from '@app-types/theme';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>kkurko.dev</title>
        <meta name='description' content='My personal website' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Analytics />
      <StyledThemeProvider theme={themes[Theme.Dark]}>
        <ThemeProvider attribute='class'>
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </StyledThemeProvider>
    </>
  );
}

export default CustomApp;
