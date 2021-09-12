import React from 'react';

import { Input, Label } from './styled';

interface Props {
  name: string;
  checked: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const Radio: React.FC<Props> = ({ name, checked, value, label, onChange }) => (
  <label>
    <Input checked={checked} name={name} type="radio" value={value} onChange={onChange} />
    <Label>{label}</Label>
  </label>
);

export default Radio;
