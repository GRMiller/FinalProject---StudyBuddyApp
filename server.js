var express = require('express');
var app = express();
var yelp = require('yelp-fusion');
var body = require('body');
var jsonBody = require('body/json');
var http = require('http');


//YELP CALL
var clientId = "nXqD_i17OL-LeQYs9dD_og";
var clientSecret = "iYnxPWwIOgz3NniNxgpmp71DyMOoGUgDrysgb67PC0DzOdy9W8BwWo39tTfUkthX";
//DELETE THE KEYS


//search api
app.get('/api/userSearch', function(req, res) {
  //define object with userinput to pass as parameters for yelp search
  var searchParams = {
    limit:40,
    term: "good for working",
    categories:"libraries,coffee,communitycenters,bagels,parks,publicplazas,beaches,collegeuniv,vocation,bubbletea,eltern_cafes,tea",
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
      res.send(response.jsonBody);
    }).catch(e => {
      console.log(e);
    });;
  });
});



//EXPRESS & SERVER
app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
