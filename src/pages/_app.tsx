import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/globalStyle';
import { themes } from '@theme/theme';

enum Mode {
  Dark = 'DARK',
  Light = 'LIGHT',
}

const MODE = Mode.Light;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes[MODE]}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(CustomApp);
