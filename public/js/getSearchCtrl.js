(function(){
var app = angular.module("mainMod");

app.controller("getSearchCtrl", ["$scope", "$http", "searchResultsService", function ($scope, $http, searchResultsService){
  console.log("getSearchCtrl is linked correctly");

  function saveResults(response){
    console.log("saveResults called");
    $http.get('/api/userSearch', function successfullCallback(response){
      searchResults = searchResultsService.setSearchResults(res);
      console.log("getSrchCtrl: ", req.body);
    }, function(error) {
      console.log(error);
    });
  }


  saveResults();

}]);



})();
