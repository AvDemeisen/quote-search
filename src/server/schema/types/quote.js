const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

const Quote = new GraphQLObjectType({
  name: 'Quote',
  fields: () => ({
    id: { type: GraphQLString },
    quote: { type: GraphQLString },
    author: { type: GraphQLString },
    score: { type: GraphQLInt }
  })
})

module.exports = Quote