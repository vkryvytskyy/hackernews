const { GraphQLServer } = require('graphql-yoga');

let links = [
  {
    id: 'link-0',
    description: 'my firs link',
    url: 'https://google.com',
  },
];

const resolvers = {
  Query: {
    info: () => 'This is the API speaking',
    feed: () => links,
    link: (parent, args) => {
      const seekedLink = links.find((link) => link.id === args.id);
      return seekedLink;
    },
  },
  Mutation: {
    post: (parent, args) => {
      const counter = links.length;
      const link = {
        id: `link-${counter}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      let updatedLink = null;
      links = links.map((link) => {
        if (link.id === args.id) {
          updatedLink = {
            ...link,
            description: args.description,
            url: args.url,
          };
          return updatedLink;
        }
        return link;
      });
      return updatedLink;
    },
    deleteLink: (parent, args) => {
      const deletedLink = links.find((link) => link.id === args.id);
      links = links.filter((link) => link.id !== args.id);
      return deletedLink;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
});

server.start(() => console.log('Server is running on http://localhost:4000'));
