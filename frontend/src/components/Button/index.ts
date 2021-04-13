import styled from 'styled-components';

const Button = styled.button`
  background: ${({ disabled, theme }) =>
    disabled ? theme.color.gray : theme.color.red};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.basic};
  color: ${({ theme }) => theme.color.white};
`;

export default Button;
