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
  console.log(JSON.stringify(req.params)+"========"+JSON.stringify(req.body)+"========"+JSON.stringify(req.formData));
  res.send("Completed").status(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});