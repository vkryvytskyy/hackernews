const links = (parent, args, ctx) => ctx.prisma.user({ id: parent.id }).links();

module.exports = {
  links,
};
