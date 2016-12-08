(function(){
var app = angular.module("mainMod");

app.controller("getSearchCtrl", ["$scope", "$http", "searchResultsService", "commentsService", function ($scope, $http, searchResultsService, commentsService){
  var displayResults = function() {
    $scope.results = searchResultsService.getSearchResults();
    $scope.ratings = commentsService.getComments(); //maybe rename so you can do .ratings instead on it
    console.log($scope.results[0].id);
    console.log($scope.ratings);
    // //some psuedo code for brainstorming
    // for(var i=0; i < $scope.results.length; i++) {
    //   if($scope.results[i].id === $scope.ratings.id) {
    //     //logic for attaching the two
    //     //new variable?
    //   }
    // }


  };
  $scope.$on('$routeChangeSuccess', function () {
    displayResults();
  });

}]);



})();
