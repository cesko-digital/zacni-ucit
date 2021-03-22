import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { setUser } from '../../redux/actions/user.action';
import { connect } from 'react-redux';
import {
  loginMutation,
  registerMutation,
} from '../../queries/authorazation.mutations';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EmailInput = styled.input``;
const PasswordInput = styled.input``;
const RegisterButton = styled.button`
  margin-top: 12px;
`;

const LoginPage = ({ setUser, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser, { data }] = useMutation(loginMutation);
  console.log(data);
  return (
    <Wrapper>
      Email:
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      Heslo:
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <RegisterButton
        onClick={() => {
          loginUser({ variables: { email, password } });
          //setEmail('');
          //setPassword('');
        }}
      >
        Registrovat
      </RegisterButton>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { setUser })(LoginPage);
