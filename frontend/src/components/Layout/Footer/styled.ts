import styled from 'styled-components';

export const FooterSection = styled.footer`
  padding: 1rem 3rem;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.color.secondary};
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const FooterText = styled.span`
  position: relative;
  left: 1.7rem;
  top: -0.4rem;
`;
export const RowWrapper = styled.span`
  float: right;
  position: relative;
  right: 1rem;
  top: 0.5rem;
`;
