const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});

app.post('/', (req, res) => {
  res.send({ ...req.body });
});

module.exports.handler = serverless(app);