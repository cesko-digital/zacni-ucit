import styled, { css } from 'styled-components';
import { mediaQueries } from '../../common/mediaQueries';

const defaultLabelStyle = css`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
const radioLabelStyle = ({ checked, margin }) => css`
  background-color: ${({ theme }) => (checked ? theme.color.green : 'transparent')};
  color: ${({ theme }) => (checked ? 'white' : theme.color.secondary)};
  padding: 0.8rem 1.5rem;
  box-sizing: border-box;
  //margin: 0.3rem;
  margin: ${({ theme }) => (margin ? margin : '0 0.5rem 0.5rem 0')};
  border: ${({ theme }) =>
    checked ? `1px solid ${theme.color.green}` : `1px solid ${theme.color.secondary}`};
  border-radius: 100px;
  float: left;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: bold;
  font-weight: bolder;
  cursor: pointer;
`;

export const StyledInput = styled.input<{
  hasError?: boolean;
  type: string;
  bgColor: string;
  color: string;
  padding: string;
  margin: string;
  disabled: boolean;
}>`
  padding: ${({ padding }) => (!!padding ? padding : '1rem 1.2rem')};
  margin: ${({ margin }) => (!!margin ? margin : '0')};
  width: 100%;
  border: 2px solid
    ${({ hasError }) =>
      ({ theme }) =>
        hasError ? theme.color.red : theme.color.gray};
  border-radius: ${({ theme, type }) =>
    type === 'button' ? theme.radius.max : theme.radius.basic};
  background-color: ${({ theme, bgColor, disabled }) => {
    if (disabled) {
      return theme.color.gray;
    }
    return !!bgColor ? bgColor : theme.color.secondary;
  }};
  color: ${({ theme, color }) => (!!color ? color : 'white')};
  font-size: ${({ theme }) => theme.fontSize.large};
  cursor: pointer;
  font-weight: 700;
  ${({ type }) => (type === 'radio' || type === 'checkbox' ? 'display: none;' : null)}
`;

export const Label = styled.label<{
  type: string;
  checked?: boolean;
  margin?: string;
}>`
  ${({ type, checked, margin }) =>
    type === 'radio' || type === 'checkbox'
      ? radioLabelStyle({ checked, margin })
      : defaultLabelStyle};
`;

export const StyledError = styled.div`
  color: ${({ theme }) => theme.color.red};
  margin-top: 0.4rem;
`;
