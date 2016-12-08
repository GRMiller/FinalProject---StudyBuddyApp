(function () {
var app = angular.module("mainMod");

//how do we make this specific to the specific business?
//something like #/place?businessid="business"?? this would need to be setup server-side, probably
app.controller("getCommentsCtrl", function ($scope, $http, $routeParams, commentsService) {

  $http.get('/api/comments').success(function(response){
    console.log("response from commentsAPI: ", response);

      for (i=0; i<response.length;i++){

        commentsService.setComments(response[i]);
      };

  }).error(function(){
    console.log("error in getting /api/comments");
  });

  // var Comment = {
  //   businessid = $routeParams.businessid,
  //   comment = reviews.comments,
  //   username = reviews.username,
  //   ratings = {crowd = reviews.crowd, groups = reviews.groups, noise = reviews.noise, outlets = reviews.outlets, size = reviews.size}
  // }

  $scope.receiveComments = function(reviews) {

    businessid = $routeParams.businessid,
    
    reviews.businessid = businessid;
    commentsService.setComments(reviews);
  };
});
//do we want to use $location to take them to some sort of thank you page after they submit a comment?


})();
