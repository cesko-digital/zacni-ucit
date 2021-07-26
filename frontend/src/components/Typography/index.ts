import styled, { css } from 'styled-components';
import type { TextAlignProps } from 'styled-system';
import { textAlign } from 'styled-system';

const headerFonts = css`
  ${textAlign}
`;

export const H1 = styled.h1<TextAlignProps>`
  font-weight: bold;
  margin: 0;
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
export const LightText = styled.p`
  font-size: 0.9em;
  margin: 0;
  font-family: 'Roboto-Light';
`;
export const PrimaryText = styled.span<{
  size?: string;
}>`
  font-size: ${({ size }) => (!!size ? size : '1.2em')};
  font-weight: bolder;
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
  font-family: 'Roboto-Regular';
`;
