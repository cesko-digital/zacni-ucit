import React from 'react';
import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import type { ChangeEventHandler } from 'react';

import { Label, StyledInput } from './styled';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
  name?: string;
  checked?: boolean;
  value?: string | number;
  bgColor?: string;
  color?: string;
  padding?: string;
  margin?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEventHandler<HTMLInputElement> & ChangeEvent<Element>) => void;
  onClick?: (e?: MouseEvent) => void;
};

const Input: FC<Props> = ({
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
  disabled,
}) => (
  <Label checked={checked} htmlFor={id} type={type}>
    <StyledInput
      bgColor={bgColor}
      checked={checked}
      color={color}
      disabled={disabled}
      id={id}
      margin={margin}
      name={name}
      padding={padding}
      type={type}
      value={type === 'button' ? value : ''}
      onChange={onChange}
      onClick={onClick}
    />
    {label}
  </Label>
);

export default Input;
