import { gql } from "@apollo/client";

export const ALL_COLLEGES_QUERY = gql`
query{colleges {id url } }
  `;
 