const postedBy = (parent, args, ctx) => ctx.prisma.link({
  id: parent.id,
}).postedBy();

const votes = (parent, args, ctx) => ctx.prisma.link({
  id: parent.id,
}).votes();

module.exports = {
  postedBy,
  votes,
};
