import styled from 'styled-components';

export const WrapCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 2rem 0;
`;

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
