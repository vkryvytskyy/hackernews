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

module.exports = {
  signup,
  login,
  post,
};
