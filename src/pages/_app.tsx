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
import Script from 'next/script';

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

function CustomApp({ Component, pageProps }: AppProps) {
  const mode = useDarkMode(true);
  const [mounted, setMounted] = useState(false);

  const theme = mode.value ? Theme.Dark : Theme.Light;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mode.value) {
      mode.toggle();
    }
  }, []);

  return (
    <>
      <Head>
        <title>kkurko.dev</title>
        <meta name='description' content='My personal website' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </Script>
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
