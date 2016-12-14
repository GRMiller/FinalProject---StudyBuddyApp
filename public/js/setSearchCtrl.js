(function () {
var app = angular.module("mainMod");

app.controller("searchCtrl", ["$route", '$scope', "$http", "$location", "searchResultsService", function ($route, $scope, $http, $location, searchResultsService) {
  //function gets called on ng-click, in turn calls $http
  $scope.userSearch = function(userText) {
      $http.get("/api/userSearch", {params: {term: $scope.userText.term, location: $scope.userText.location}}).success(function(response, userText) {
        console.log(response)
        searchResultsService.setSearchResults(response);
        $location.path("/searchresults").url($location.path()); //switches view, removes ?businessid if it's there
        $route.reload(); //allows a new search to be displayed if you're already on #/searchresults
      }).error(function(userText){
        console.log("error: ", $scope.userText);
      });

  };

}]);

  // app.controller("searchCtrl", ["$route", "$scope", "$http", "$location", "searchResultsService", function ($route, $scope, $http, $location, searchResultsService) {
  //   //function gets called on ng-click, in turn calls $http
  //   $scope.userSearch = function(userText) {
  //       $http.get("/api/userSearch", {params: {term: $scope.userText.term, location: $scope.userText.location}}).success(function(response, userText) {
  //         searchResultsService.setSearchResults(response);
  //         $location.path("/searchresults").url($location.path()); //switches view, removes ?businessid if it's there
  //         $route.reload(); //allows a new search to be displayed if you're already on #/searchresults
  //       }).error(function(userText){
  //         console.log("error: ", $scope.userText);
  //       });
  //   };
  // }]);
})();
