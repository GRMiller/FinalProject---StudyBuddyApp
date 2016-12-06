(function () {
var app = angular.module("mainMod");
//displays comments that are stored in the controller

app.controller("displayCommentsCtrl", function($scope, $http,$route, $routeParams, commentStore) {
  var displayComments = function() {
    $scope.storedComments = commentStore.getComments();
    //not sure if if this has to be scope or if it can be var
  };

  //comments that are stored in our own api
  var apiComments = function() {
    $http.get("api/comments").then(function(response) {
      console.log(response);
      console.log(response.data[0].userinput);
    }, function(response) {
      // $scope.comments = "No comments";
    });
  }

  //displays the comments on the page
  $scope.$on('$routeChangeSuccess', function () {
    apiComments();
    displayComments();
  });
  //we might choose to do this differently

});


})();
