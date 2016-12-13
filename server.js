var express = require('express');
var app = express();
var yelp = require('yelp-fusion');
var body = require('body');
var jsonBody = require('body/json');
var http = require('http');


//YELP CALL

//DELETE THE KEYS





//search api
app.get('/api/userSearch', function(req, res) {
  //define object with userinput to pass as parameters for yelp search
  var searchParams = {
    limit:40,
    term: "good for working",
    categories:"libraries,coffee,communitycenters,bagels,parks,publicplazas,beaches,collegeuniv,vocation,bubbletea,bakeries,eltern_cafes,tea",
    term: req.query.term,
    location: req.query.location
  };
  //begin call
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);
    client.search(searchParams).then(response => {
      res.send(response.jsonBody);
    });
  }).catch(e => {
    console.log(e);
  });;
});

//business api
app.get('/api/business', function(req, res) {
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.business(req.query.id).then(response => {
      console.log(response);
      res.send(response.jsonBody);
    }).catch(e => {
      console.log(e);
    });;
  });
});



//EXPRESS & SERVER
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
