import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Container from '@components/Container';
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
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default CustomApp;
