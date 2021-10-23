import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Red Hat Text', sans-serif;
  }
  
  section {
    height: 100vh;

    @media (min-width: 1024px) {
      height: calc(100vh - 64px);
    }
  }
`;

export default GlobalStyle;
