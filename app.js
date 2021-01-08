require('dotenv').config();
const express = require('express');
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const app = express();

const TableName = process.env.TABLE;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
  const params = {
    TableName,
    item: req.body
  }

  res.send(params);
});

app.get('/v1', (req, res) => {
  const params = {
    TableName
  }

  ddb.scan(params).promise()
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

app.post('/v1', (req, res) => {
  const params = {
    TableName,
    item: req.body
  }

  ddb.put(params).promise()
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

app.put('/v1', (req, res) => {
  const params = {
    TableName,
    item: req.body
  }

  ddb.update(params)
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

app.delete('/v1', (req, res) => {
  const params = {
    TableName,
    item: req.body
  }

  ddb.delete(params)
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

module.exports = app;