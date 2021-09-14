import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Button = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: #242120;
  appearance: none;
  border: none;
  background: none;
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
  padding: 5px 0;
  text-align: left;
  cursor: pointer;

  ${mediaQueriesUp('sm')`
    font-size: 14px;
  `}
`;

export const IconWrapper = styled.span`
  margin-right: 5px;
  transform: translateY(-1px);

  svg {
    width: 14px;
    height: 14px;
    fill: #7f50ff;
  }
`;
