const express = require('express');
const bodyParser = require('body-parser');
const nodeFetch = require('node-fetch');
const env = require('dotenv').config();

const app = express();
const path = require('path');
const { error } = require('console');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.post('/apidata', async (req, res) => {
  console.log(req.body, 'body');
  try {
    const fetchResult = await nodeFetch(
      `https://api.meaningcloud.com/sentiment-2.1?key=eacb182767b68e9f3621f279c95da456&url=${formData}&lang=en`
    );
    const ressult = await fetchResult.json();
    console.log(ressult, 'result');
    res.send(ressult);
  } catch (error) {}
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
