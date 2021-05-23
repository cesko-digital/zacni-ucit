import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import { ChangeEventHandler } from 'react';

import { Wrapper, Label, StyledInput } from './styled';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
  name?: string;
  checked?: boolean;
  value?: string;
  bgColor?: string;
  color?: string;
  padding?: string;
  margin?: string;
  onChange?: (
    e: ChangeEventHandler<HTMLInputElement> & ChangeEvent<Element>
  ) => void;
  onClick?: (e?: MouseEvent) => void;
};

export const Input: FC<Props> = ({
  label,
  name,
  type = 'text',
  id,
  checked,
  onChange,
  onClick,
  value,
  bgColor,
  color,
  padding,
  margin,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id} checked={checked} type={type}>
        <StyledInput
          padding={padding}
          margin={margin}
          bgColor={bgColor}
          color={color}
          id={id}
          name={name}
          type={type}
          checked={checked}
          onClick={onClick}
          onChange={onChange}
          value={type === 'button' ? value : ''}
        />
        {label}
      </Label>
    </Wrapper>
  );
};
