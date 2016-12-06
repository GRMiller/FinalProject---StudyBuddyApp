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
var clientId = "nXqD_i17OL-LeQYs9dD_og";
var clientSecret = "iYnxPWwIOgz3NniNxgpmp71DyMOoGUgDrysgb67PC0DzOdy9W8BwWo39tTfUkthX";

app.get("/api/businesses", function(req, res) {
  //begin our api call and grab user search terms from setSearchCtrl

  console.log(userText);


  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search({
    //where we place in user search terms
    term: '',
    location: 'detroit'
  }).then(response => {

    //link fetchSearchCtrl to display results on page
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
