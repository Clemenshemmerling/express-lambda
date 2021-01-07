const serverlessExpressMiddleware = require('@vendia/serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(serverlessExpressMiddleware.eventContext())

app.get('/v1', (req, res) => {
  res.json({success: "test"})
})

module.exports = app