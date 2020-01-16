const postedBy = (parent, args, ctx) => ctx.prisma.link({
  id: parent.id,
}).postedBy();

module.exports = {
  postedBy,
};
