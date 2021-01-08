const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
  res.send({ ...req.body });
});

app.get('/v1', (req, res) => {
  res.json({success: "test get"});
});

app.post('/v1', (req, res) => {
  res.json({success: "test post"});
});

module.exports = app