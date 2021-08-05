import styled, { css } from 'styled-components';
import type { TextAlignProps } from 'styled-system';
import { textAlign } from 'styled-system';
import { theme } from '../../common/theme';

const headerFonts = css`
  ${textAlign}
`;

export const H1 = styled.h1<TextAlignProps>`
  font-weight: 700;
  margin: 0;
  font-size: ${theme.fontSize.xxxLarge};
  ${headerFonts}
  & span {
    font-size: ${theme.fontSize.large};
    font-weight: 400;
  }
`;

export const H2 = styled.h2<{
  margin?: string;
}>`
  font-size: ${theme.fontSize.xxxLarge};
  margin: ${({ margin }) => (!!margin ? margin : '0')};
  font-weight: 400;
  ${headerFonts}
`;
export const H3 = styled.h3<{
  margin?: string;
  padding?: string;
}>`
  font-size: ${theme.fontSize.xxLarge};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  font-weight: 700;
  ${headerFonts}
`;
export const H4 = styled.h3`
  font-size: ${theme.fontSize.large};
  margin: 0;
  font-weight: 700;
  ${headerFonts}
`;
export const LightText = styled.p`
  font-size: ${theme.fontSize.large};
  margin: 0;
  font-family: 'StabilGrotesk-regular', sans-serif;
  font-weight: 400;
`;
export const PrimaryText = styled.span<{
  size?: string;
  marginLeft?: string;
}>`
  font-size: ${({ size }) => (!!size ? size : '1.2em')};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
  margin-left: ${({ marginLeft }) => (!!marginLeft ? marginLeft : 0)};
`;

export const LinkRegular = styled.a<{
  color?: string;
}>`
  font-size: ${theme.fontSize.medium};
  font-weight: 700;
  color: ${({ color }) => (!!color ? color : 'inherit')};
  text-decoration: underline;
  margin-right: 1rem;
  &:hover {
    color: inherit;
  }
`;

export const LinkLight = styled.a<{
  color?: string;
}>`
  font-size: ${theme.fontSize.medium};
  font-weight: 400;
  color: ${({ color }) => (!!color ? color : 'inherit')};
  text-decoration: underline;
  margin-right: 1rem;
  &:hover {
    color: inherit;
  }
`;
