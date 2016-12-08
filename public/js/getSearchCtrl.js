(function(){
var app = angular.module("mainMod");

app.controller("getSearchCtrl", ["$scope", "$http", "searchResultsService", function ($scope, $http, searchResultsService){
  var displayResults = function() {
    $scope.results = searchResultsService.getSearchResults();
  };
  $scope.$on('$routeChangeSuccess', function () {
    displayResults();
  });

}]);



})();
