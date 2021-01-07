const serverlessExpressMiddleware = require('@vendia/serverless-express/middleware');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(serverlessExpressMiddleware.eventContext());

app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/v1', (req, res) => {
  res.json({success: "test get"});
});

app.post('/v1', (req, res) => {
  res.json({success: "test post"});
});

module.exports = app