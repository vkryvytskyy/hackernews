
Object.defineProperty(exports, '__esModule', { value: true });
const prisma_lib_1 = require('prisma-client-lib');
const { typeDefs } = require('./prisma-schema');

const models = [
  {
    name: 'Link',
    embedded: false,
  },
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: 'https://eu1.prisma.sh/kryvytskyy-volodymyr-2828cc/hackernews/dev',
});
exports.prisma = new exports.Prisma();
