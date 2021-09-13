import React from 'react';

import { Wrapper, Label } from './styled';

interface Props {
  name: string;
  checked: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const Checkbox: React.FC<Props> = ({ name, checked, value, label, onChange }) => (
  <Wrapper isChecked={checked}>
    <input checked={checked} name={name} type="checkbox" value={value} onChange={onChange} />
    <Label>{label}</Label>
  </Wrapper>
);

export default Checkbox;
