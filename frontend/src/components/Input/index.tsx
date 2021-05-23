import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import { ChangeEventHandler } from 'react';

import { Wrapper, Label, StyledInput } from './styled';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  name: string;
  checked?: boolean;
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
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Wrapper>
      <Label htmlFor={id} checked={checked} type={type}>
        <StyledInput
          id={id}
          name={name}
          type={type}
          checked={checked}
          onClick={onClick}
          onChange={onChange}
        />
        {label}
      </Label>
    </Wrapper>
  );
};
