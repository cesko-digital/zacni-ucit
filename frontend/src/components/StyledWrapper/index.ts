import styled from 'styled-components';

const StyleWrapper = styled.div<{
  margin?: string;
  width?: string;
  textAlign?: string;
  padding?: string;
}>`
  margin: ${({ margin }) => (!!margin ? margin : '0')};
  padding: ${({ padding }) => (!!padding ? padding : '0')};
  width: ${({ width }) => (!!width ? width : '100%')};
  text-align: ${({ textAlign }) => (!!textAlign ? textAlign : 'left')};
`;

export default StyleWrapper;
