import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ withPaddingBottom }) => (withPaddingBottom ? '0 16px 60px' : '0 16px')};
`;
