import { gql } from "@apollo/client";

export const ADD_BIRTHDATE = gql`
  mutation addUser($firstName: String, $lastName: String, $email: String, $dob: Date){
      addUser(firstName: $firstName, lastName: $lastName, email: $email, dob: $dob){
          id
          firstName
          lastName
          email
          dob
      }
  }
`;