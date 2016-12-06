(function () {

var app = angular.module("mainMod");

app.controller("searchCtrl", ['$scope', "$http", function ($scope, $http) {
  //user search terms being passed in and returned as object
  $scope.userSearch = function(userText) {
      console.log("userSearch Fnctn: ", userText);

      $http.get('/api/userSearch', {params: {user_term: $scope.userText.term, user_location: $scope.userText.location}}).success(function($scope, userText) {
        console.log("api/userSearch: ", $scope.userText)
      }).error(function(userText){
        console.log("error : ", $scope.userText)
      });
  };
}]);







})();
