var express = require('express');
var router = express.Router();
var shangjia = require('../data/service.json');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(shangjia);
});
router.get('/shangjia',function (req,res) {
  res.send(shangjia)
})
module.exports = router;




