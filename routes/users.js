var express = require('express');
var router = express.Router();
var index = require('../data/index.json');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(index);
});
router.get('/index',function (req,res) {
  res.send(index)
})
module.exports = router;
