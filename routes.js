var express = require("express");
var router = express.Router();
var http = require('http');
var request = require("request");


router.get("/tests/:word", function (req, res, next) {
  var word = req.params.word;
  var options = {
    url: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + word,
    headers: {
      'app_id': '50958562',
      'app_key': 'b162dc254f30f0d06bbd5232844305da'
    }
  }

  var stuff = {};
  request(options, function callback(error, response, body) {

    stuff = {
      response: response,
      body: JSON.parse(body)
    }
    res.send(stuff);
  });

});

module.exports = router;
