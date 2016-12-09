(function () {
var app = angular.module("mainMod");

//how do we make this specific to the specific business?
//something like #/place?businessid="business"?? this would need to be setup server-side, probably
app.controller("getCommentsCtrl", function ($scope, $http, $route, $routeParams, commentsService) {

  $scope.receiveComments = function(reviews) {

    var bizreviews = {};

    businessid = $routeParams.businessid;
    bizreviews.userinput = reviews;
    bizreviews.businessid = businessid;
    console.log(bizreviews);
    commentsService.setComments(bizreviews);
    $route.reload();
  };
});
//do we want to use $location to take them to some sort of thank you page after they submit a comment?


})();
