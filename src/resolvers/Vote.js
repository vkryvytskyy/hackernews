const link = (parent, args, ctx) => ctx.prisma.vote({
  id: parent.id,
}).link();

const user = (parent, args, ctx) => ctx.prisma.vote({
  id: parent.id,
}).user();

module.exports = {
  link,
  user,
};
