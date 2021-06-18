const express = require('express');
const bodyParser = require('body-parser');
const nodeFetch = require('node-fetch');
const env = require('dotenv').config();
const cors = require('cors');

const app = express();
const path = require('path');
const { error } = require('console');

app.use(cors());
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.post('/apidata', async (req, res) => {
  try {
    const fetchResult = await nodeFetch(
      `https://api.meaningcloud.com/sentiment-2.1?key=eacb182767b68e9f3621f279c95da456&url=${req.body.formData}&lang=en`
    );
    const ressult = await fetchResult.json();
    console.log(ressult, 'result');
    res.send(ressult);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
