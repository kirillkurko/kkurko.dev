import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import Container from '@components/Container';
import { Analytics } from '@vercel/analytics/react';

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>kkurko.dev</title>
        <meta name='description' content='My personal website' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Analytics />
      <SessionProvider session={session}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
