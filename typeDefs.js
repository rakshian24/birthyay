import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    dob: Date
  }

  type Query {
    getUsers: [User]
    getUser(id: ID): User
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String, dob: Date): User
    deleteUser(id: ID): String
    updateUser(id: ID, firstName: String, lastName: String, email: String, dob: Date): User
  }
`;

export default typeDefs;