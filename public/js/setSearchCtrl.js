(function () {
var app = angular.module("mainMod");

app.controller("searchCtrl", ['$scope', "$http", "searchTermsService", "searchResultsService", function ($scope, $http, searchTermsService, searchResultsService) {
  //function gets called on ng-click, in turn calls $http
  $scope.userSearch = function(userText) {
      console.log("userSearch Fnctn: ", userText);

      searchTermsService.setSearchTerms(userText);

      $http.get('/api/userSearch', {params: {term: $scope.userText.term, location: $scope.userText.location}}).success(function(response, userText) {
        console.log("success!: ", response);

        searchResultsService.setSearchResults(response);

      }).error(function(userText){
        console.log("error : ", $scope.userText);
      });
  };
}]);







})();
