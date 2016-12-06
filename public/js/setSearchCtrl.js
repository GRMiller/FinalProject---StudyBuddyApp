(function () {

var app = angular.module("mainMod");

app.controller("searchCtrl", ['$scope', "$http", function ($scope, $http) {
  //user search terms being passed in and returned as object
  $scope.userSearch = function(userText) {
          console.log(userText);
      $http.get('/api/businesses', function(userText) {
        res.send(userText);
      });
  };
}]);







})();
