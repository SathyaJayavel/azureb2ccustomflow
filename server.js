const express = require('express');
const app = express();
const port = process.env.port || 3000;
const json = require('./sampleJson.json')
const cors = require('cors')

app.use(cors())
app.get('/users', (req, res) => {
  res.send(json);
})

app.post('/users', (req, res) => {
  console.log(req);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});