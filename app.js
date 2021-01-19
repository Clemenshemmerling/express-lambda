require('dotenv').config();
const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const ddb = new AWS.DynamoDB.DocumentClient();
const app = express();

const TableName = process.env.TABLE;

app.use(cors({origin: '*'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
  const params = {
    TableName,
    Item: req.body
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
    Item: req.body
  }

  ddb.put(params).promise()
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

app.put('/v1', (req, res) => {
  const params = {
    TableName,
    Item: req.body
  }

  ddb.put(params).promise()
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

app.delete('/v1', (req, res) => {
  const params = {
    TableName,
    Key: req.body
  }

  ddb.delete(params).promise()
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

module.exports = app;