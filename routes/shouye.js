var express = require('express');
var router = express.Router();
var shouye = require('../data/index.json');
/* GET home page. */
router.get('/shouye',function (req,res) {
  res.send(shouye)
})
module.exports = router;
