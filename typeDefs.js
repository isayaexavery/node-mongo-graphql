const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID
  name: String
  email: String
  password: String
  mobile: String
  country: String
  verified: Boolean
}

type Query {
  getAllUsers: [User]
  getUser(id: ID): User
  getUserInfo(id: ID): User
}

type AuthData {
  id: ID
  token: String
  tokenExpiration: Int
}

input UserInput {
  name: String
  email: String
  password: String
  mobile: String
  country: String
  verified: Boolean
}

input AuthInput{
  id: ID
  token: String
  tokenExpiration: Int
}

type Mutation {
  createUser(user: UserInput): User
  updateUser(id: ID, user: UserInput): User
  verifyUser(id: ID, user: UserInput): User
  loginUser(id: ID, user: UserInput): User
}
`;

module.exports = typeDefs;
