import React, { FC, InputHTMLAttributes } from 'react';

import { Wrapper, Label, StyledInput } from './styled';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const Input: FC<Props> = ({ label, name, type = 'text' }) => (
  <Wrapper>
    <StyledInput id={name} type={type} />
    <Label htmlFor={name}>{label}</Label>
  </Wrapper>
);
