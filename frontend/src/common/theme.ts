import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    primary: '#5227CC' /* violet */,
    secondary: '#0C0807' /* dark black */,
    green: '#54C176' /* green */,
    error: '#EA4435' /* red */,
    gray: '#e5e5e5',
  },
  fontSize: {
    small: '0.625rem', // 10px
    normal: '0.75rem', // 12px
    medium: '0.875rem', // 14px
    large: '1rem', // 16px
    xLarge: '1.125rem', // 18px
    xxLarge: '1.5rem', // 24px
    xxxLarge: '2rem', // 32px
  },
  radius: {
    basic: '5px',
    max: '50px',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
