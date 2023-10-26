import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import connectDB from "./database/db.js";

const initServer = async () => {
  const app = express();
  dotenv.config({ path: "./.env" });
  connectDB();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app })
  app.use((req, res) => {
    res.send("Server started successfully!")
  })
  const PORT = process.env.SERVER_PORT || 4101;
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
  });
};

initServer();