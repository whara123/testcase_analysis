var express = require('express');
var router = express.Router();

const app = express();
const port = process.env.PORT || 5000;
app.listen(port);

let getCrawler = require('../crawler');

app.use('/getData', async function (req, res) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  let result;

  result = await getCrawler.crawler(req.query.name);

  res.send(result);
});

module.exports = router;
