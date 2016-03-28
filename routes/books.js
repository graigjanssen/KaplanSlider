var express = require('express'),
    router  = express.Router(),
    bookInfo = require('../lib/bookInfo');

router.get('/', function(req, res){
  res.json(bookInfo);
});

module.exports = router;
