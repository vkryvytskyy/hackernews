const info = () => 'This is the API speaking';

const feed = async (root, args, ctx) => {
  const where = args.filter
    ? {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    }
    : {};
  const links = await ctx.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  const count = await ctx.prisma.linksConnection({
    where,
  }).aggregate().count();

  return {
    links,
    count,
  };
};

const link = (root, args, ctx) => ctx.prisma.link({
  id: args.id,
});

module.exports = {
  info,
  feed,
  link,
};
