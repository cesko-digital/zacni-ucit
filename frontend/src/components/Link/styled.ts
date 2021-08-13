import { theme } from 'src/common/theme';
import styled from 'styled-components';

export const ALink = styled.a`
  color: 'inherit';
  font-weight: 'bold';
  cursor: pointer;

  & svg {
    margin-right: 0.5rem;
  }

  &.linkRegular {
    font-size: ${theme.fontSize.medium};
    font-weight: 700;
    color: inherit;
    text-decoration: underline;
    margin: 0 1rem 0 0;
  }

  &.bold {
    color: black;
    font-weight: 700;
  }

  &.light {
    color: black;
    font-weight: 400;
  }

  &.footer {
    font-size: ${theme.fontSize.normal};
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

  &.yellowBgr {
    background: #ffb60b;
  }

  &.primaryBgr {
    background: ${theme.color.primary};
  }

  &.redBgr {
    background: #ff2f5b;
  }

  &.red {
    color: red;
  }
`;
