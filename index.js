const { ApolloServer, gql } = require('apollo-server');
const { events, locations, users, participants } = require('./data');

const typeDefs = gql`
    type Event {
        id: ID!
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
        location_id: ID!
        user_id: ID!
        participants: [Participant!]!
    }
`;

const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});