import { useFormikContext } from 'formik';
import React from 'react';

import { Wrapper, Label, StyledInput, Error } from './styled';

type Props = {
  label?: string;
  name?: string;
  validate?: (value: string) => void;
};

const Input: React.FC<Props> = ({ label, name, validate }) => {
  const { touched, errors } = useFormikContext();

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput name={name} validate={validate} withError={errors[name] !== undefined} />
      {touched[name] && errors[name] && <Error>{errors[name]}</Error>}
    </Wrapper>
  )
};

export default Input;
