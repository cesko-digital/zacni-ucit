import styled from 'styled-components';
import { mediaQueries, mediaQueriesUp } from '../../common/mediaQueries';

export const Wrapper = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #4b4848;
  margin-bottom: 4px;
  width: 100%;

  ${mediaQueriesUp('md')`
    width: auto;
      
  `}
`;

export const Label = styled.p`
  display: block;
  margin-right: 0.5rem;
  font-size: 0.75rem;
`;

export const BarWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  counter-reset: step;
  padding: 0;
`;

export const Bar = styled.li`
  width: 16px;
  margin-right: 5px;
  border-radius: 2px;
  height: 4px;
  background: ${({ theme, isActive }) => (isActive ? '#54C176' : theme.color.gray)};
  transition: background 150ms ease-in-out;
`;
