import styled from 'styled-components';

import ButtonComponent from '@components/Button/Button';
import { mediaQueriesUp } from 'src/common/mediaQueries';

export const Button = styled(ButtonComponent)`
  color: #242120;
  font-size: 10px;
  width: calc(100% + 32px);
  text-align: left;
  padding: 14px 16px;
  justify-content: flex-start;
  align-items: center;
  background: #ecebeb;
  border-radius: 0;
  line-height: 1;
  margin: 0 -16px 32px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  ${mediaQueriesUp('sm')`
    background: none;
    width: auto;
    padding: 48px 0 16px;
    margin: 0;
    color: #7F50FF;
    font-weight: bold;
    font-size: 0.875rem;
  `}
`;

export const IconWrapper = styled.span`
  display: inline-block;
  margin-right: 12px;

  svg {
    width: 16px;
    height: 16px;
    fill: #242120;

    ${mediaQueriesUp('sm')`
      fill: #7F50FF;
    `}
  }
`;
