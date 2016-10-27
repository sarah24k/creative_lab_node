var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scraper', function(req, res, next) {
  console.log("in function");
  var url = req.query.q;
  //console.log(url2);
  //var url = "https://www.google.com";
  request(url, function(error, response, thishtml) {
    if (!error) {
      //for (var i = 0; i < thishtml.length; i++) {

      //console.log(thishtml);
      thishtml = thishtml.toLowerCase();      
      thishtml = thishtml.replace(/eat/g, "ate");
      thishtml = thishtml.replace(/before/g, "be-fo-wah");
      thishtml = thishtml.replace(/can't/g, "caint");
      thishtml = thishtml.replace(/dog/g, "dawg");
      thishtml = thishtml.replace(/daddy/g, "diddy");
      thishtml = thishtml.replace(/fire/g, "faar");
      thishtml = thishtml.replace(/fellow/g, "fellah");
      thishtml = thishtml.replace(/guy/g, "fellah");
      thishtml = thishtml.replace(/four/g, "fo-wah");
      thishtml = thishtml.replace(/for/g, "fo-wah");
      thishtml = thishtml.replace(/get/g, "git");
      thishtml = thishtml.replace(/going to/g, "gonna");
      thishtml = thishtml.replace(/like/g, "lac");
      thishtml = thishtml.replace(/marry/g, "mare");
      thishtml = thishtml.replace(/on/g, "own");
      thishtml = thishtml.replace(/pea/g, "pay");
      thishtml = thishtml.replace(/red/g, "ray-ed");
      thishtml = thishtml.replace(/said/g, "sayd");
      thishtml = thishtml.replace(/school/g, "scole");
      thishtml = thishtml.replace(/sweet/g, "swate");
      thishtml = thishtml.replace(/tire/g, "taar");
      thishtml = thishtml.replace(/you all/g, "y'all");
      thishtml = thishtml.replace(/yellow/g, "yellah");
      thishtml = thishtml.replace(/think/g, "reckon");
      thishtml = thishtml.replace(/teasing/g, "just pickin");
      thishtml = thishtml.replace(/complain/g, "pitch a fit");
      thishtml = thishtml.replace(/figure/g, "reckon");
      thishtml = thishtml.replace(/river/g, "riv-ah");
      thishtml = thishtml.replace(/our/g, "ow-wah");
      thishtml = thishtml.replace(/power/g, "pow-ah");
      thishtml = thishtml.replace(/future/g, "few-cha");
      thishtml = thishtml.replace(/here/g, "hee-yah");
      thishtml = thishtml.replace(/over/g, "ovah");
      thishtml = thishtml.replace(/ou/g, "ow");
      /*console.log(thishtml);
      thishtml = thishtml.replace("y", "z");
      thishtml = thishtml.replace("x", "y");
      thishtml = thishtml.replace("w", "x");
      thishtml = thishtml.replace("v", "w");
      thishtml = thishtml.replace("u", "v");
      thishtml = thishtml.replace("t", "u");
      thishtml = thishtml.replace("s", "t");
      thishtml = thishtml.replace("r", "s");
      thishtml = thishtml.replace("q", "r");
      thishtml = thishtml.replace("p", "q");
      thishtml = thishtml.replace("o", "p");
      thishtml = thishtml.replace("n", "o");
      thishtml = thishtml.replace("m", "n");
      thishtml = thishtml.replace("l", "m");
      thishtml = thishtml.replace("k", "l");
      thishtml = thishtml.replace("j", "k");
      thishtml = thishtml.replace("i", "j");
      thishtml = thishtml.replace("h", "i");
      thishtml = thishtml.replace("g", "h");
      thishtml = thishtml.replace("f", "g");
      thishtml = thishtml.replace("e", "f");
      thishtml = thishtml.replace("d", "e");
      thishtml = thishtml.replace("c", "d");
      thishtml = thishtml.replace("b", "c");
      thishtml = thishtml.replace("a", "b");
      thishtml = thishtml.replace("z", "a");*/
      //}      
      console.log("about to send...");
      res.send(thishtml);      
      //res.status(200).html(thishtml);
    }
  });
});

console.log("app is now running on port: 3000");

module.exports = router;
