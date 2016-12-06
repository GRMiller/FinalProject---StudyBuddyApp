var express = require('express');
var app = express();
var yelp = require('yelp-fusion');
var comment = require("./module");

//fake comments api
app.get("/api/comments", function(req, res) {
  res.send(comment.comments);
});


//yelp stuff
//need to add these in order for program to work
var clientId = "";
var clientSecret = "";

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search({
    //need to find a way to make this a variable and possibly add other parameters from the search api
    //like coffee shops or libraries or w/e
    location: 'detroit'
  }).then(response => {
    //these next 2 lines are for express
    app.get("/api/businesses", function(req, res) {
      res.send(response.jsonBody);
    });
  });
}).catch(e => {
  console.log(e);
});

//server stuff
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
