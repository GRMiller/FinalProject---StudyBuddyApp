(function () {
var app = angular.module("mainMod");
//controller for the view of each individual location

app.controller("businessCtrl",function($scope, $route, $routeParams, $http) {
  var businessid = $route.current.params.businessid;

//calls yelp's business api based on id of the link clicked in the search results
$scope.$on('$routeChangeSuccess', function () {
  $http.get('/api/business', {params: {id: businessid}}).success(function(response) {
    $scope.business = response;
  }).error(function(){
    console.log("error");
  });
});



});


})();
