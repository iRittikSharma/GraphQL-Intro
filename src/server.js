import { ApolloServer, gql } from "apollo-server";

// create a new Apollo server object using the ApolloServer constructor
// gql - > helps us to define graphql query in the form of a string

const Todos = [
  {
    id: 1,
    task: "Getting started with GRAPHQL",
    completed: true,
  },
  {
    id: 2,
    task: "Understanding Graphql on server side",
    completed: true,
  },
  {
    id: 3,
    task: "Understanding Graphql On client side",
    completed: false,
  },
];

// Defining the types in graphql
// ! -> defines that these properties are mandatory
const typeDefs = gql`
  type Todo {
    id: ID!
    task: String
    completed: Boolean
  }
  type Query {
    getAllTodos: [Todo]
    getTodo(id: ID!): Todo
  }
`;

/**
 *  Resolvers : are the those fns which have the logic and gets executed when client queries for something
 */

const resolvers = {
  Query: {
    getAllTodos: () => {
      //How the client get the data is defined here ->  it can be a db call or api call or anyhting
      return Todos;
    },
    getTodo: (_, param) => {
      console.log(param);
      return Todos.find((todo) => todo.id == param.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.listen().then(() => {
  console.log("GraphQl server started");
});

// by default this serveer will bbe started at port 4000
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
