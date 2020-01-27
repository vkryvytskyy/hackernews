const newLinkSubscribe = (parent, args, ctx) => ctx.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node();
const newVoteSubscribe = (parent, args, ctx) => ctx.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node();

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload) => payload,
};

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: (payload) => payload,
};

module.exports = {
  newLink,
  newVote,
};
