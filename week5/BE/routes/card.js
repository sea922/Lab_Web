var express = require('express');
var router = express.Router();

router.post('/dating/cards', function(req, res, next) {
  const dbCard = req.body
  
});

router.get('/', function(req, res, next) {
  res.status(200).send('Hello');
});

router.get('/', function(req, res, next) {
  res.status(200).send('Hello');
});

module.exports = router;
