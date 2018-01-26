var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', {  });
});

/* GET results page rendenring. */
router.get('/results', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('results', {city: 'Austin, TX', roles: req.query.roles});
});

module.exports = router;
