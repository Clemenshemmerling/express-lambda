const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send({ ...req.body });
// });

// app.post('/', (req, res) => {
//   res.send({ ...req.body });
// });

app.post('/', (req, res) => {
  res.send({ application: 'test post', version: '1' });
})

module.exports.handler = serverless(app);