(function () {
var app = angular.module("mainMod");
//will need to be included in the place view
//how do we make this specific to the specific business?
//something like #/place?businessid="business"?? this would need to be setup server-side, probably
app.controller("recieveCommentsCtrl", function ($scope, commentStore) {
  $scope.receiveComments = function(reviews) {
    commentStore.setComments($scope.reviews);
  };
});
//do we want to use $location to take them to some sort of thank you page after they submit a comment?


})();
