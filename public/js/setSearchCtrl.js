(function () {
var app = angular.module("mainMod");

app.controller("searchCtrl", ["$timeout", '$scope', "$http", "$location", "searchTermsService", "searchResultsService", function ($timeout, $scope, $http, $location, searchTermsService, searchResultsService) {
  //function gets called on ng-click, in turn calls $http
  $scope.userSearch = function(userText) {
      searchTermsService.setSearchTerms(userText);

      $http.get('/api/userSearch', {params: {term: $scope.userText.term, location: $scope.userText.location}}).success(function(response, userText) {
        searchResultsService.setSearchResults(response);
        //switches views when search results come through
        $location.path("/searchresults");
      }).error(function(userText){
        console.log("error : ", $scope.userText);
      });


  };
}]);







})();
