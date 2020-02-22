const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PostApi = require('./data-source/post-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ PostAPI: new PostApi() })
});

server.listen().then(({ url }) => {
  console.log(`servidor iniciado en ${url}`);
});
