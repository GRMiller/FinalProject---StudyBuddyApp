(function () {
var app = angular.module("mainMod");
//displays comments that are stored in the controller

app.controller("displayCommentsCtrl", function($scope, $http,$route, $routeParams, commentsService, searchResultsService) {

  var displayComments = function(userComments) {

    var comments = commentsService.getComments();
    console.log("displayComments: ", comments);

      for(var i = 0; i <= comments.length; i++) {
        console.log("for loop must be working ", comments[i]);
        if($route.current.params.businessid === comments[i].businessid) {
          $scope.comments = comments[i].userinput;
          console.log("in loop: ", $scope.comments);
        } else {
          $scope.comments = ["No comments"];
          console.log("no match found")
        }
      }

    console.log("is it jumping over the for loop???");
    }

    $scope.$on('$routeChangeSuccess', function () {
      displayComments();
    });

});


  //displays the comments on the page

  //we might choose to do this differently




})();
