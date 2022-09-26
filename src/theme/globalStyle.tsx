import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Red Hat Text', sans-serif;
    background-color: #121212;
    overflow: hidden;
  }
  
  section {
    height: 100vh;
  }
`;

export default GlobalStyle;
