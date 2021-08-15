import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'StabilGrotesk';
    src: url('../fonts/StabilGrotesk-Bold.woff') format('opentype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'StabilGrotesk';
    src: url('../fonts/StabilGrotesk-Regular.woff') format('opentype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Roboto-Light';
    src: url('../fonts/Roboto-Light.ttf') format('opentype');
    font-weight: light;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    //font-size: 62.5%;
    font-size: 100%;
    width: 100vw;
    height: 100vh;
  }

  body {
    font-size: 1rem;
    font-family: 'StabilGrotesk', sans-serif;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyles;
