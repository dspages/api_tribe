const express = require('express');
const fetch = require('node-fetch');

const app = express();

const credentials = require('./credentials.js');
const handlers = require('./handlers.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get('/v1/api/search/:keyword', (req, res) => {
//   const keyword = req.params.keyword;
//   (async function () {
//     const response = await fetch(`${credentials.baseURL}&name=${keyword}`, { method: 'GET', });
//     const json = await response.json();
//     return res.status(200).json(json);
//   })();
// })

app.get('/verify/:phoneNumber', (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  handlers.verify(req, res, phoneNumber);
})

app.get('/document/:docID', (req, res) => {
  const docID = req.params.docID;
  // handlers.
})

app.listen(3030, () => {
  console.log('hello')
});

