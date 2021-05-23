import styled, { css } from 'styled-components';

const defaultLabelStyle = css`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-left: 1rem;
`;
const radioLabelStyle = (checked) => css`
  background-color: ${({ theme }) =>
    checked ? theme.color.primary : 'transparent'};
  color: ${({ theme }) => (checked ? 'white' : theme.color.secondary)};
  padding: 0.8rem 1.5rem;
  margin: 0.3rem;
  border: ${({ theme }) =>
    checked ? 'none' : `1px solid ${theme.color.secondary}`};
  border-radius: 100px;
  float: left;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Wrapper = styled.div`
  /* margin-left: 1.6rem; */
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  border: 2px solid
    ${({ hasError }) => ({ theme }) =>
      hasError ? theme.color.red : theme.color.gray};
  border-radius: ${({ theme }) => theme.radius.basic};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 100;
  padding: 1rem 1.2rem;
  ${({ type }) => (type === 'radio' ? 'display: none;' : null)}
`;

export const Label = styled.label<{ type: string; checked?: boolean }>`
  ${({ type, checked }) =>
    type === 'radio' ? radioLabelStyle(checked) : defaultLabelStyle};
`;

export const StyledError = styled.div`
  color: ${({ theme }) => theme.color.red};
  margin-top: 0.4rem;
`;
