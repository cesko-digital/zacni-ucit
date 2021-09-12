import styled from 'styled-components';

export const Label = styled.span`
  font-weight: bold;
  padding: 8px 16px;
  display: inline-block;
  border: 1px solid #242120;
  border-radius: 40px;
  margin: 5px;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    background: #54c176;
    border-color: #54c176;
    color: white;
  }
`;
