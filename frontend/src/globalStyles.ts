import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Hind';
    src: url('../fonts/hind-v11-latin-regular.woff2') format('opentype');
    font-weight: 100;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 62.5%;
    width: 100vw;
    height: 100vh;
  }

  body {
    font-size: 1.5rem;
    font-family: 'Hind';
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyles;
