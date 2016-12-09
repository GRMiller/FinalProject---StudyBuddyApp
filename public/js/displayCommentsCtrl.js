(function () {
var app = angular.module("mainMod");

//Displays Comments from commentService
app.controller("displayCommentsCtrl", function($scope, $http,$route, $routeParams, commentsService, searchResultsService) {

  var displayComments = function(userComments) {

    var allReviews = commentsService.getComments();
    var commentsArr = allReviews.comments;
    $scope.comments = [];
      //loop through comments array and attach userinput to scope for ones matching business id
      for(var i = 0; i < commentsArr.length; i++) {
        if($route.current.params.businessid === commentsArr[i].businessid) {
          $scope.comments.push(commentsArr[i].userinput);
          // console.log($scope.comments);
        }
      }
  };
  //call display when route changes successfully, change to just when this view loads?/when array in commentsService is populated
  $scope.$on('$routeChangeSuccess', function () {
    displayComments();
  });
  // displayComments();
});


})();
