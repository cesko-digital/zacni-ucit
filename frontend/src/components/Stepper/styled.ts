import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #4b4848;
  margin-bottom: 4px;
`;

export const Bar = styled.span`
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme, isActive }) => (isActive ? theme.color.green : theme.color.gray)};
  margin-right: 5px;
  transition: background 150ms ease-in-out;
`;

export const BarWrapper = styled.div`
  display: flex;
  margin-left: 8px;
`;
