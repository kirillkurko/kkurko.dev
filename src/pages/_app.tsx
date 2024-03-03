import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Container from '@components/Container';
import { Analytics } from '@vercel/analytics/react';
import { Red_Hat_Text, IBM_Plex_Sans } from 'next/font/google';
import clsx from 'clsx';

export const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>kkurko.dev</title>
        <meta
          name='description'
          content='Frontend Developer, creator, and penguin.'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Analytics />
      <Container
        className={clsx(
          'font-primary',
          redHatText.variable,
          ibmPlexSans.variable,
        )}
      >
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default CustomApp;
