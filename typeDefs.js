import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query{
      greet: String
  }
`;

export default typeDefs;