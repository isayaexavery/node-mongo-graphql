const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 4000;

async function startServer() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("Hello Graphql")
  });

  await mongoose.connect(process.env.DATABASE_ACCESS, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
  });

  console.log('Mongoose connected...');

  app.listen(PORT, () => console.log("Server running on port 4000"));
}

startServer();
