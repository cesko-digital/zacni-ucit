import styled, { css } from 'styled-components';

import LinkComponent from './Link';

const baseStyles = css`
  background: #7f50ff;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 16px 32px;
  margin-top: 0.5rem;
  border: none;
  border-radius: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Link = styled(LinkComponent)`
  ${baseStyles}
`;

export const Button = styled.button`
  ${baseStyles}
`;

export const IconWrapper = styled.span`
  width: 8px;
  height: 16px;
  display: block;
  margin-left: 20px;
`;
