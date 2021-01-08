require('dotenv').config();
const express = require('express');
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const app = express();

const tableName = "Message";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
  const params = {
    tableName,
    item: req.body
  }

  res.send(params);
});

app.get('/v1', (req, res) => {
  const params = {
    tableName
  }

  ddb.put(params).promise()
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

app.post('/v1', (req, res) => {
  res.json({success: "test post"});
});

module.exports = app;