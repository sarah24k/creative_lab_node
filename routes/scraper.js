var express = require('express');
var router = express.Router();
var request = require('request');

//var app = express();

/* GET scraped html info. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*router.get('/scraper', function(req, res, next) {
  var url = "https://www.google.com";
  request(url, function(error, response, html) {
    if (!error) {
      //var thisHtml = cheerio.load(html);
      console.log(html);
    }
  });
});*/

module.exports = router;
