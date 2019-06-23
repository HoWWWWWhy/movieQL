import { GraphQLServer } from 'graphql-yoga'
import resolvers from "./graphql/resolvers"

console.log('start');

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
})

server.start(() => console.log("GraphQL Server Running"));