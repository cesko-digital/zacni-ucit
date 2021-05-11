import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 1.6rem;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  border: 2px solid
    ${({ hasError }) => ({ theme }) =>
      hasError ? theme.color.red : theme.color.gray};
  border-radius: ${({ theme }) => theme.radius.basic};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 100;
  padding: 1rem 1.2rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-left: 1rem;
`;

export const StyledError = styled.div`
  color: ${({ theme }) => theme.color.red};
  margin-top: 0.4rem;
`;
