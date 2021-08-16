import styled from 'styled-components';

import ButtonComponent from '@components/Button/Button';

export const Button = styled(ButtonComponent)`
  color: #242120;
  font-size: 10px;
  width: calc(100% + 5rem);
  text-align: left;
  padding: 14px 16px;
  justify-content: flex-start;
  align-items: center;
  background: #ecebeb;
  border-radius: 0;
  line-height: 1;
  margin: 0 -16px;
  margin-bottom: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const IconWrapper = styled.span`
  display: block;
  margin-right: 12px;

  svg {
    width: 16px;
    height: 8px;
    fill: #7f50ff;
  }
`;
