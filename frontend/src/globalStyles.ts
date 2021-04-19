import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Bold';
    src: url('../fonts/Roboto-Bold.ttf') format('opentype');
    font-weight: 100;
  }
  @font-face {
    font-family: 'Roboto-Regular';
    src: url('../fonts/Roboto-Regular.ttf') format('opentype');
    font-weight: 100;
  }
  @font-face {
    font-family: 'Roboto-Light';
    src: url('../fonts/Roboto-Light.ttf') format('opentype');
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
    font-family: 'Roboto-Regular', sans-serif;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyles;
