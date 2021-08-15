import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled, { css } from 'styled-components';
import type { TextAlignProps } from 'styled-system';
import { textAlign } from 'styled-system';
import { theme } from '../../common/theme';

const headerFonts = css`
  ${textAlign}
`;

export const H1 = styled.h1<{
  bold?: boolean;
  padding?: string;
  color?: string;
}>`
  font-weight: ${({ bold }) => (!!bold ? '700' : '400')};
  margin: 0;
  padding: ${({ padding }) => (padding ? padding : '0')};
  color: ${({ color }) => (color ? color : 'inherit')};
  font-size: ${theme.fontSize.xxxLarge};
  ${headerFonts}
  & span {
    font-size: ${theme.fontSize.large};
    font-weight: 400;
  }

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    margin: 0 0 16px;
  `}

  ${mediaQueriesUp('md')`
    font-size: 4rem;
  `}
`;

export const H2 = styled.h2<{
  margin?: string;
  padding?: string;
}>`
  font-size: ${theme.fontSize.xxLarge};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  font-weight: 700;
  ${headerFonts}
  & span {
    font-size: ${theme.fontSize.xxLarge};
    font-weight: 400;
  }
`;

export const H3 = styled.h3`
  font-size: ${theme.fontSize.large};
  margin: 0;
  font-weight: 700;
  ${headerFonts}
`;

export const H4 = styled.h4`
  font-size: ${theme.fontSize.large};
  margin: 0;
  font-weight: 700;
  ${headerFonts}
`;

export const LightText = styled.p`
  font-size: ${theme.fontSize.large};
  margin: 0;
  font-family: 'StabilGrotesk', sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

export const PrimaryText = styled.span<{
  size?: string;
  marginLeft?: string;
}>`
  font-size: ${({ size }) => (!!size ? size : '1.2em')};
  font-weight: bolder;
  color: ${({ theme }) => theme.color.primary};
  display: inline;
  margin: 0;
  margin-left: ${({ marginLeft }) => (!!marginLeft ? marginLeft : 0)};
`;

export const FocusedParagraph = styled.p`
  color: #7f50ff;
`;

export const LinkRegular = styled.a<{
  color?: string;
  margin?: string;
  footer?: boolean;
}>`
  font-size: ${({ footer }) => (!!footer ? theme.fontSize.normal : theme.fontSize.medium)};
  font-weight: 700;
  color: ${({ color }) => (!!color ? color : 'inherit')};
  text-decoration: underline;
  margin: ${({ margin }) => (!!margin ? margin : '0 1rem 0 0')};
  cursor: pointer;

  &:hover {
    color: inherit;
  }
`;

export const LinkLight = styled.a<{
  color?: string;
  footer?: boolean;
}>`
  font-size: ${({ footer }) => (!!footer ? theme.fontSize.normal : theme.fontSize.medium)};
  font-weight: 400;
  color: ${({ color }) => (!!color ? color : 'inherit')};
  text-decoration: underline;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    color: inherit;
  }
`;

export const LinkToExtPage = styled.a`
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
    text-decoration-color: red;
    text-decoration-thickness: 3px;
  }

  &.button {
    padding: 1rem 2rem;
    margin: 2.5rem 0 1rem 0;
    border-radius: ${theme.radius.max};
    font-weight: 700;
    color: white;
    border: 1px solid white;
    text-align: center;
  }

  &.primaryBgr {
    background: ${theme.color.primary};
  }

  &.footerBtn {
    background: transparent;
    border: 2px solid ${theme.color.primary};
    border-radius: ${theme.radius.max};
    padding: 0.5rem 1rem;
    margin: 1rem 0.5rem;
    font-size: ${theme.fontSize.normal};
    font-weight: 700;
    color: ${theme.color.primary};
    text-decoration: none;
    width: 10rem;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
      text-decoration-color: red;
      text-decoration-thickness: 3px;
    }
  }

  & svg {
    margin-right: 1rem;
  }
`;
