const express = require('express');
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
  res.send({ ...req.body });
});

app.get('/v1', (req, res) => {
  ddb.put().promise()
  .then(resopnse => res.send(response))
  .catch(err => res.send(err));
});

app.post('/v1', (req, res) => {
  res.json({success: "test post"});
});

module.exports = app;