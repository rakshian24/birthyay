import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const initServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app })
  app.use((req, res) => {
    res.send("Server started successfully!")
  })
  const PORT = process.env.PORT || 4101;
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
  });
};

initServer();