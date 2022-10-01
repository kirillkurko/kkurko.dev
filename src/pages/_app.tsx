import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/globalStyle';
import { themes } from '@theme/theme';
import Head from 'next/head';
import Container from '@components/Container';
import Script from 'next/script';

const googleAnalyticsId = process.env.NOTION_DATABASE_ID;

enum Mode {
  Dark = 'DARK',
  Light = 'LIGHT',
}

const MODE = Mode.Light;

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
        strategy='lazyOnload'
      />
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${googleAnalyticsId});
        `}
      </Script>
      <GlobalStyle />
      <ThemeProvider theme={themes[MODE]}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
