(function () {
var app = angular.module("mainMod");

  app.controller("displayCommentsCtrl", function($scope, $route, $routeParams, commentsService) {

    var displayComments = function(userComments) {

      var allReviews = commentsService.getComments();
      var commentsArr = allReviews.comments;
      $scope.comments = [];
        //loop through comments array and attach userinput to scope for ones matching business id
        for(var i = 0; i < commentsArr.length; i++) {
          if($route.current.params.businessid === commentsArr[i].businessid) {
            $scope.comments.push(commentsArr[i].userinput);
          }
        }
    };
    $scope.$on('$routeChangeSuccess', function () {
      displayComments();
    });
  });
})();
