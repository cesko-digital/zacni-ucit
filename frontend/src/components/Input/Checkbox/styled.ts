import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.label<{ isChecked: boolean }>`
  background: none;
  padding: 8px 16px;
  border: 1px solid ${({ isChecked }) => (isChecked ? 'transparent' : '#242120')};
  background: ${({ isChecked }) => (isChecked ? '#54C176' : 'none')};
  color: ${({ isChecked }) => (isChecked ? 'white' : '#242120')};
  display: inline-block;
  border-radius: 50px;
  font-weight: bold;

  ${mediaQueriesUp('md')(`
      box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.1);
      color: #242120;
      border: 1px solid ${({ isChecked }) => (isChecked ? 'transparent' : '#242120')};
      background: ${({ isChecked }) => (isChecked ? 'rgba(127, 80, 255, 0.05)' : 'none')};
      padding: 12px 32px;
      font-size: 1.25rem;
  `)}
`;

export const Label = styled.span`
  margin-left: 10px;
`;
