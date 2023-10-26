import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
dotenv.config({ path: "./.env" });
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import connectDB from "./database/db.js";

const initServer = async () => {
  const { SERVER_PORT, NODE_ENV } = process.env;
  const app = express();
  connectDB();
  const apolloServer = new ApolloServer({ typeDefs, resolvers, persistedQueries: false });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app })
  const PORT = SERVER_PORT || 4101;

  // Since we are using E6 modules for NodeJS, __dirname will not be present for modules, we need to do some work around as below for making __dirname to work
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  if (NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  } else if (NODE_ENV === 'development') {
    app.get('/', (req, res) => {
      res.status(200).json({ message: `Server is running on port! ${PORT}` });
    });
  }


  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
  });
};

initServer();