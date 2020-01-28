const graphql = require('graphql')
const { GraphQLSchema } = graphql
const query = require('./root_query')

module.exports = new GraphQLSchema({
  query
});
