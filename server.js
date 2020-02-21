/* eslint-env es6 */

/*
 * Dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');

/*
 * Config
 */
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

/*
 * User Routes
 */

app.get('/make-call', (req, res) => {
  res.sendfile('public/makeCallIndex.html');
});

app.get('/receive-call', (req, res) => {
  res.sendfile('public/receiveCallIndex.html');
});

app.get('/', (req, res) => {
  res.sendfile('public/index2.html');
});

/*
 * Listen
 */
app.listen(process.env.PORT || port);
console.log(`app listening on port ${port}`);
