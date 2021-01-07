const serverlessExpressMiddleware = require('@vendia/serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(serverlessExpressMiddleware.eventContext())

app.get('/v1', (req, res) => {
  res.json({success: "test get"})
})

app.post('/v1', (req, res) => {
  res.json({success: "test post"})
})

module.exports = app