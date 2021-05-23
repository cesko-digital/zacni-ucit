import styled, { css } from 'styled-components';
import { textAlign, TextAlignProps } from 'styled-system';

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
