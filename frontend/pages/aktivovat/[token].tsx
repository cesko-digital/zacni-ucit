import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { setPasswordMutation } from '../../queries/authorazation.mutations';
import { useRouter } from 'next/router';
import MiddleContainer from '../../components/MiddleContainer.component';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PasswordInput = styled.input`
  margin: 12px 0 12px 0;
`;
const ActivateButton = styled.button`
  margin-top: 12px;
`;

const LoginPage = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const router = useRouter();
  const { token } = router.query;
  const [registerUser, { data }] = useMutation(setPasswordMutation);

  return (
    <Wrapper>
      Heslo 1:
      <PasswordInput
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      Heslo 2:
      <PasswordInput
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <ActivateButton
        onClick={() => {
          registerUser({
            variables: {
              newPassword1: password1,
              newPassword2: password2,
              token,
            },
          });
          setPassword1('');
          setPassword2('');
        }}
      >
        Aktivovat
      </ActivateButton>
    </Wrapper>
  );
};
export default LoginPage;
