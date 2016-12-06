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
      for(var i = 0; i < response.data.length; i++) {
        if($route.current.params.businessid === response.data[i].businessid) {
          $scope.comments = response.data[i].userinput;
          return;
        } else {
          $scope.comments = ["No comments"];
          //this probably can't stay here forever since it'll look weird if we add a comment later
        }
      }
    }, function(response) {
      return false;
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
