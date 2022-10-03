import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '@theme/globalStyle';
import Head from 'next/head';
import Container from '@components/Container';
import Script from 'next/script';
import { themes } from '@theme/theme';
import { Theme } from '@app-types/theme';
import { ThemeProvider } from 'styled-components';

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

function CustomApp({ Component, pageProps }: AppProps) {
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
      <ThemeProvider theme={themes[Theme.Dark]}>
        <Container>
          <GlobalStyle />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
