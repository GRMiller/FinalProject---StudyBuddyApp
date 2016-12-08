(function () {
var app = angular.module("mainMod");
//displays comments that are stored in the controller

app.controller("displayCommentsCtrl", function($scope, $http,$route, $routeParams, commentsService, searchResultsService) {

  var displayComments = function(userComments) {

    var comments = commentsService.getComments();
    console.log("displayComments: ", comments);
      for(var i = 0; i < comments; i++) {
        if($route.current.params.businessid === comments[i].businessid) {
          $scope.comments = response.data[i].userinput;
          console.log("in loop: ", $scope.comments);
          return;
        } else {
          $scope.comments = ["No comments"];
          //this probably can't stay here forever since it'll look weird if we add a comment later
        }
      }
    }

  console.log(displayComments());
  $scope.$on('$routeChangeSuccess', function () {
    displayComments();
  });
});

  //displays the comments on the page

  //we might choose to do this differently




})();
