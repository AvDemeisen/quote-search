const express = require('express')
const expressGraphQL = require('express-graphql')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('dotenv').config()
const schema = require('./schema')
const app = express()
const port = process.env.NODE_PORT || 3000

const start = () => {
  return app
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use('/quotes', routes)
    .use('/v1/graphql', expressGraphQL({ schema, graphiql: true }))
    .use((_req, res) =>
      res.status(404).json({ success: false, error: 'Route not found' })
    )
    .listen(port, () => console.log(`Server ready on port ${port}`))
}

module.exports = {
  start
}
