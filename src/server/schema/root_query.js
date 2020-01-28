const graphql = require('graphql')
const request = require('request')
request.debug = true

const { GraphQLObjectType, GraphQLList, GraphQLString } = graphql

const quote = require('./types/quote')

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    quotes: {
      type: new GraphQLList(quote),
      args: { text: { type: GraphQLString } },
      resolve(parentValue, args) {
        return new Promise((resolve, reject) => {
          request.get(`http://localhost:3000/quotes?text=${args.text}`, {json: true}, (err, data) => {
            if (err) return reject(err)
            resolve(data)
          })
        })
        .then(response => response.body.data.values)
      }
    }
  })
})

module.exports = rootQuery
