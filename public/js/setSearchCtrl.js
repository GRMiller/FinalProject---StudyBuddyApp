(function () {
var app = angular.module("mainMod");

app.controller("searchCtrl", ["$route", '$scope', "$http", "$location", "searchResultsService", function ($route, $scope, $http, $location, searchResultsService) {
  //function gets called on ng-click, in turn calls $http
  $scope.userSearch = function(userText) {
      $http.get('/api/userSearch', {params: {term: $scope.userText.term, location: $scope.userText.location}}).success(function(response, userText) {
        searchResultsService.setSearchResults(response);
        $location.path("/searchresults").url($location.path()); //switches view, removes ?businessid if it's there
        $route.reload(); //allows a new search to be displayed if you're already on #/searchresults
      }).error(function(userText){
        console.log("error: ", $scope.userText);
      });

  };




  // function getLocation() {
  //   console.log("location working");
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //     console.log(position.coordinates.latitude + " " + position.coordinates.longitude);
  //   }
  // }
  //
  // function showPosition (position){
  //   console.log("Latitude: " + position.coordinates.latitude + " Longitude: " + position.coordinates.longitude);
  //   var latlon = position.coordinates.latitude + "," + position.coordinates.longitude;
  // };


}]);







})();
