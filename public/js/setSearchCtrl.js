(function () {
var app = angular.module("mainMod");

app.controller("searchCtrl", ['$scope', "$http", function ($scope, $http) {
  //function gets called on ng-click, in turn calls $http
  $scope.userSearch = function(userText) {
      console.log("userSearch Fnctn: ", userText);

      $http.get('/api/userSearch', {params: {user_term: $scope.userText.term, user_location: $scope.userText.location}}).success(function($scope, userText) {
        console.log("sent successfully!");
      }).error(function(userText){
        console.log("error : ", $scope.userText);
      });
  };
}]);







})();
