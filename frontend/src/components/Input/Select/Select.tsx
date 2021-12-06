import React from 'react';

import { SelectElement } from './styled';

interface Props {
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  items: {
    value: string;
    text: string;
  }[];
}

const Select: React.FC<Props> = ({ items, value, name, onChange }) => (
  <SelectElement value={value} name={name} onChange={onChange}>
    {items.map(({ value, text }) => (
      <option key={value} value={value}>
        {text}
      </option>
    ))}
  </SelectElement>
);

export default Select;
