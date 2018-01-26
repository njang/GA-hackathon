var express = require('express');
var router = express.Router();

/* GET results page rendenring. */
router.get('/results', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('results', {});
});

module.exports = router;
