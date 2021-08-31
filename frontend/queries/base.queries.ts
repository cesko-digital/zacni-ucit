import { gql } from '@apollo/client';

export const allCollegesQuery = gql`
  query {
    colleges {
      id
      name
      type
      form
      address
      rid
      ic
      databox
      url
      code
    }
  }
`;

export const allTitlesQuery = gql`
  query getTitles {
    titles {
      id
      code
      name
    }
  }
`;

export const titleQuery = gql`
  query title($id: Integer!) {
    title(id: $id) {
      id
      code
      name
    }
  }
`;

export const collegeQuery = gql`
  query college($id: Integer!) {
    college(id: $id) {
      id
      name
      type
      form
      address
      rid
      ic
      databox
      url
      code
    }
  }
`;
