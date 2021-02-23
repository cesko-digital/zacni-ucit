import { gql } from '@apollo/client';

export const allCollegesQuery = gql`
  query {
    colleges {
      id
      url
    }
  }
`;
