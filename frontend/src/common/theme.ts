import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    primary: '#1C1C1C' /* dark black */,
    secondary: '#404FA7' /* violet */,
    error: '#EA4435' /* red */,
    gray: '#e5e5e5',
  },
  fontSize: {
    small: '1.2rem',
    normal: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
    xLarge: '2rem',
    xxLarge: '2.4rem',
    xxxLarge: '3rem',
  },
  radius: {
    basic: '5px',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
