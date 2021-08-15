import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #858383;
  font-size: 0.75rem;

  ${mediaQueriesUp('sm')`
    border-left: 1px solid #858383;
    padding-left: 20px;
    margin: 30px 0;
  `};
`;

export const Title = styled.strong`
  display: block;
`;

export const Text = styled.p``;

export const Link = styled.a`
  color: #242120;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const IconWrapper = styled.span`
  pointer-events: none;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  display: block;

  svg  {
    display: block;
    fill: #7f50ff;
  }
`;
