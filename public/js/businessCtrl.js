(function () {
var app = angular.module("mainMod");
//controller for the view of each individual location

app.controller("businessCtrl",function($scope, $route, $routeParams, $http, commentsService) {
  var businessid = $route.current.params.businessid;
  var allReviews = commentsService.getComments();
  console.log(allReviews.avgRates);

//calls yelp's business api based on id of the link clicked in the search results
$scope.$on('$routeChangeSuccess', function () {
  $http.get('/api/business', {params: {id: businessid}}).success(function(response) {
    $scope.business = response;
  }).error(function(){
    console.log("error");
  });

  for(var i = 0; i < allReviews.avgRates.length; i++) {
    if(allReviews.avgRates[i].businessid === businessid) {
      $scope.ratings = allReviews.avgRates[i];
    }
  }
  console.log($scope.ratings);

});



});


})();
