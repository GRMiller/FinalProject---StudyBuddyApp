var express = require('express');
var app = express();
var yelp = require('yelp-fusion');
var comment = require("./module");
var body = require('body');
var jsonBody = require('body/json')

//fake comments api
app.get("/api/comments", function(req, res) {
  res.send(comment.comments);
});


//yelp stuff
//need to add these in order for program to work
var clientId = "nXqD_i17OL-LeQYs9dD_og";
var clientSecret = "iYnxPWwIOgz3NniNxgpmp71DyMOoGUgDrysgb67PC0DzOdy9W8BwWo39tTfUkthX";

app.get('/api/userSearch', function(req, res) {
  //begin our api call and grab user search terms from setSearchCtrl
  var searchParams = {
    term: req.query.user_term,
    location: req.query.user_location
  };

  console.log(searchParams);
  console.log("get", req.query);

  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchParams).then(response => {
      console.log( "then", searchParams.term)
      console.log("this is yelp's response: ", response.jsonBody.businesses)

        res.send(response.jsonBody);

    });
  }).catch(e => {
    console.log(e);
  });;
})



//EXPRESS & SERVER
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
