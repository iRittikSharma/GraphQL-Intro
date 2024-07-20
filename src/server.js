import { ApolloServer, gql } from "apollo-server";

// create a new Apollo server object using the ApolloServer constructor
// gql - > helps us to define graphql query in the form of a string

// Defining the types in graphql
const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }
`;

/**
 *  Resolvers : are the those fns which have the logic and gets executed when client queries for something
 */

const server = new ApolloServer({
  typeDefs: undefined,
  resolvers: undefined,
});

server.listen().then(() => {
  console.log("GraphQl server started");
});

/***
 *      Topics can refer later on
 *
 *      SCALARS
 */

/**
 *              ABOUT CLIENT SIDE
 *
 *      Cilent can create 2 things
 *
 *      1. Query  ->  If Client wants to read something
 *      2. Mutations -> If client want to CREATE, UPDATE,DELETE   something.
 *
 *      These are just the cconventions  ->  but if we folllow them then we can its good ,but if don't follow this then stilll it works
 *
 */
