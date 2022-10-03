import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from '@theme/theme';

const fontPrimary = ({ theme }: ThemeProps) => theme.fontFamilies.primary;
const colorBackground = ({ theme }: ThemeProps) => theme.colors.background;

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${fontPrimary};
    background-color: ${colorBackground};
    box-sizing: border-box;

    @media (max-width: 1200px) {
      overflow: auto;
    }
  }
`;

export default GlobalStyle;
