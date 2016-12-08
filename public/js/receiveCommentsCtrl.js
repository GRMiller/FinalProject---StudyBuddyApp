(function () {
var app = angular.module("mainMod");

//how do we make this specific to the specific business?
//something like #/place?businessid="business"?? this would need to be setup server-side, probably
app.controller("getCommentsCtrl", function ($scope, $http, commentsService) {

  $http.get('/api/comments').success(function(response){
    console.log("commentsAPI: ", response);

      commentsService.setComments(response);

      // for(var i = 0; i < response.businesses.length; i++) {
      //   if($route.current.params.businessid === response.businesses[i].business.id) {
      //
      //     }
      // }

  }).error(function(){
    console.log("error in getting /api/comments");
  });

  $scope.receiveComments = function(reviews) {
    console.log("receiveComments: ", reviews);

    commentsService.setComments($scope.reviews);
  };
});
//do we want to use $location to take them to some sort of thank you page after they submit a comment?


})();
