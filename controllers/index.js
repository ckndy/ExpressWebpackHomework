var express = require('express');
var router = express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res){
  res.json({data: "Aye aye"});
});

module.exports = router;