import styled from 'styled-components';

const StyleWrapper = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => (!!margin ? margin : '0')};
`;

export default StyleWrapper;
