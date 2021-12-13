import styled, { css } from 'styled-components';
import { Field } from 'formik';

export const StyledInput = styled(Field)<{ withError: boolean }>`
  padding: 5px 10px;
  min-height: 40px;
  width: 100%;
  border-radius: 4px;
  background-color: white;
  color: black;
  font-weight: 700;
  border: ${({ withError }) => (withError ? '1px solid #eb8e93' : '1px solid #cac9c8')};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  font-size: 12px;
  color: #ad1f26;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 35px;
`;
