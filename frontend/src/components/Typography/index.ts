import styled, { css } from 'styled-components';
import type { TextAlignProps } from 'styled-system';
import { textAlign } from 'styled-system';
import { theme } from '../../common/theme';

const headerFonts = css`
  ${textAlign}
`;

export const H1 = styled.h1<TextAlignProps>`
  font-weight: bold;
  margin: 0;
  font-size: 32px;
  ${headerFonts}
  & span {
    font-size: ${theme.fontSize.large};
    font-weight: 400;
  }
`;

export const H2 = styled.h2`
  font-size: 32px;
  margin: 0;
  font-weight: 400;
  ${headerFonts}
`;
export const H3 = styled.h3`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
  ${headerFonts}
`;
export const H4 = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: bold;
  ${headerFonts}
`;
export const LightText = styled.p`
  //font-size: 0.9em;
  font-size: 16px;
  margin: 0;
  font-family: 'StabilGrotesk-regular', sans-serif;
`;
export const PrimaryText = styled.span<{
  size?: string;
  marginLeft?: string;
}>`
  font-size: ${({ size }) => (!!size ? size : '1.2em')};
  font-weight: bold;
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
