import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Container from '@components/Container';
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
      <ThemeProvider attribute='class'>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
