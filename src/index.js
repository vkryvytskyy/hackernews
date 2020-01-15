const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    info: () => 'This is the API speaking',
    feed: (root, args, ctx) => ctx.prisma.links(),
    link: (root, args, ctx) => ctx.prisma.link({
      id: args.id,
    }),
  },
  Mutation: {
    post: (root, args, ctx) => ctx.prisma.createLink({
      url: args.url,
      description: args.description,
    }),
    updateLink: (root, args, ctx) => ctx.prisma.updateLink({
      where: {
        id: args.id,
      },
      data: {
        description: args.description,
        url: args.url,
      },
    }),
    deleteLink: (root, args, ctx) => ctx.prisma.deleteLink({
      id: args.id,
    }),
  },
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: { prisma },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
