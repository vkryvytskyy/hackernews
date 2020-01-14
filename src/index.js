const { GraphQLServer } = require('graphql-yoga');

const links = [
  {
    id: 1,
    description: 'my firs link',
    url: 'https://google.com',
  },
];

const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

const resolvers = {
  Query: {
    info: () => 'This is the API speaking',
    feed: () => links,
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log('Server is running on http://localhost:4000'));
