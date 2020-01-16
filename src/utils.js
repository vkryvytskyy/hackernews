const jwt = require('jsonwebtoken');

const APP_SECRET = 'GraphQL-is-aw3some';

const getUserId = (ctx) => {
  const auth = ctx.request.get('Authorization');
  if (auth) {
    const token = auth.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }
  throw new Error('Authentication failed :(');
};

module.exports = {
  getUserId,
  APP_SECRET,
};
