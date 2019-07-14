var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

router.post('/scrapurl', function(req, res, next) {
 var url = Object.keys(req.body)[0];
 console.log("url", Object.keys(req.body)[0]);
 process.stdout.write('Please wait..');
request(url, (err, resp, body)=>{
 if(err) return res.send("Error in fetching URL:"+err);
 var OGP = {};
 var $ = cheerio.load(body);

 var img = $("meta[property = 'og:image']");
 var $img= $(img).attr('content');
 var $desc = $("meta[property = 'og:description']").attr('content');
 var $title = $("meta[property = 'og:title']").attr('content');

 var OGP = {
        title: $title,
	description: $desc,
        images: $img
};
console.log("scraped:", OGP);
res.send(OGP);
});
});

module.exports = router;

