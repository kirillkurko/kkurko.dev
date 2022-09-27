import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Red Hat Text', sans-serif;
    background-color: #121212;
    box-sizing: border-box;

    @media (max-width: 1200px) {
      overflow: auto;
    }
  }
`;

export default GlobalStyle;
