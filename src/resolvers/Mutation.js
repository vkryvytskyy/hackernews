// node modules
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// helpers
const { APP_SECRET, getUserId } = require('../utils');

const signup = async (parent, args, ctx) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user,
  };
};

const login = async (parent, args, ctx) => {
  const user = await ctx.prisma.user({
    email: args.email,
  });
  if (!user) {
    throw new Error('Invalid email');
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
};

const post = (parent, args, ctx) => {
  const userId = getUserId(ctx);
  return ctx.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  });
};

const updateLink = async (parent, args, ctx) => {
  const link = await ctx.prisma.updateLink({
    data: {
      url: args.url,
      description: args.description,
    },
    where: {
      id: args.id,
    },
  });
  return link;
};

const deleteLink = async (parent, args, ctx) => ctx.prisma.deleteLink({
  id: args.id,
});

const vote = async (parent, args, ctx) => {
  const userId = getUserId(ctx);

  const voteExists = await ctx.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  });

  if (voteExists) {
    throw new Error(`Already voted for this link: ${args.linkId}`);
  }

  return ctx.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  });
};

module.exports = {
  signup,
  login,
  post,
  updateLink,
  deleteLink,
  vote,
};
