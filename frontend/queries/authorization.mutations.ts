import { gql } from '@apollo/client';

export const registerMutation = gql`
  mutation registerMutation($email: String!) {
    register(email: $email) {
      success
      errors
    }
  }
`;

export const setPasswordMutation = gql`
  mutation setPasswordMutation(
    $token: String!
    $newPassword1: String!
    $newPassword2: String!
  ) {
    passwordSet(
      token: $token
      newPassword1: $newPassword1
      newPassword2: $newPassword2
    ) {
      success
      errors
    }
  }
`;

export const loginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      errors
    }
  }
`;
