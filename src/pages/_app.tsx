import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/globalStyle';
import { themes } from '@theme/theme';
import Head from 'next/head';

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
      <GlobalStyle />
      <ThemeProvider theme={themes[MODE]}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(CustomApp);
