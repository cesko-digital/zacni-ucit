import styled, { css } from 'styled-components';
import type { TextAlignProps } from 'styled-system';
import { textAlign } from 'styled-system';

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
`;
