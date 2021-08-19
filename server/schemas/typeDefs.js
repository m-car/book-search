const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    stub: String
   
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }
  type Book{
    authors: [String]
      
    description: String!

   
    bookId: String!
    image: String
    link: String
    title:String!
  
  }
 
`;

module.exports = typeDefs;
