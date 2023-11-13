import { gql } from "@apollo/client";

export const GET_BIRTHDATES = gql`
  query getUsers{
    getUsers{
      id
      firstName
      lastName
      email
      dob
    }
  }
`;