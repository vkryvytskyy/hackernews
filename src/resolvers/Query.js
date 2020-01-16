const info = () => 'This is the API speaking';

const feed = (root, args, ctx) => ctx.prisma.links();

const link = (root, args, ctx) => ctx.prisma.link({
  id: args.id,
});

module.exports = {
  info,
  feed,
  link,
};
