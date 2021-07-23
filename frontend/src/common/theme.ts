import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    primary: '#5227CC' /* violet */,
    secondary: '#0C0807' /* dark black */,
    green: '#54C176' /* green */,
    error: '#EA4435' /* red */,
    gray: '#e5e5e5',
  },
  // fontSize: {
  //   xxS: '0.9rem',
  //   small: '1.2rem',
  //   normal: '1.4rem',
  //   medium: '1.6rem',
  //   large: '1.8rem',
  //   xLarge: '2rem',
  //   xxLarge: '2.4rem',
  //   xxxLarge: '3rem',
  // },

  fontSize: {
    small: '10px',
    normal: '12px',
    medium: '14px',
    large: '16px',
    xLarge: '18px',
    xxLarge: '24px',
    xxxLarge: '32px',
  },
  radius: {
    basic: '5px',
    max: '50px',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
