import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { registerMutation } from '../../queries/authorazation.mutations';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EmailInput = styled.input``;
const RegisterButton = styled.button`
  margin-top: 12px;
`;

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [registerUser, { data }] = useMutation(registerMutation);
  console.log(data);
  return (
    <Wrapper>
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <RegisterButton
        onClick={() => {
          registerUser({ variables: { email } });
          setEmail('');
        }}
      >
        Registrovat
      </RegisterButton>
    </Wrapper>
  );
};
export default RegisterPage;
