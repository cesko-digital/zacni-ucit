import styled, { css } from 'styled-components';
import type { TextAlignProps } from 'styled-system';
import { textAlign } from 'styled-system';
import { theme } from '../../common/theme';

const headerFonts = css`
  ${textAlign}
`;

export const H1 = styled.h1<TextAlignProps>`
  font-weight: normal;
  margin: 0;
  font-size: 32px;
  color: #0c0807;
  line-height: 38px;
  ${headerFonts}
`;

export const H2 = styled.h2`
  margin: 0;
  ${headerFonts}
`;
export const H3 = styled.h3`
  margin: 0;
  ${headerFonts}
`;
export const H4 = styled.h4`
  font-size: ${theme.fontSize.large};
  margin: 0;
  font-weight: 700;
  ${headerFonts}
`;
export const LightText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  color: #0c0807;
`;
export const PrimaryText = styled.span<{
  size?: string;
}>`
  font-size: ${({ size }) => (!!size ? size : '1.2em')};
  font-weight: bolder;
  color: ${({ theme }) => theme.color.primary};
  display: inline;
  margin: 0;
  margin-left: ${({ marginLeft }) => (!!marginLeft ? marginLeft : 0)};
`;

export const LinkRegular = styled.a<{
  color?: string;
  margin?: string;
}>`
  font-size: ${theme.fontSize.medium};
  font-weight: 700;
  color: ${({ color }) => (!!color ? color : 'inherit')};
  text-decoration: underline;
  margin: ${({ margin }) => (!!margin ? margin : '0 1rem 0 0')};
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
