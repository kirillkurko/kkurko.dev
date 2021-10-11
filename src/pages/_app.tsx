import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/globalStyle';
import { theme } from '@theme/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/styles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
}
export default appWithTranslation(CustomApp);
