(function () {
var app = angular.module("mainMod");
//controller for the view of each individual location

  app.controller("businessCtrl",function($scope, $route, $routeParams, $http, searchResultsService) {

    //gets coordinates from searchResultsService and sets as parameters for google maps
    // var businessid = $route.current.params.businessid;
    // var srchRslts = searchResultsService.getSearchResults();
    // console.log(srchRslts);
    // console.log(businessid);
    // for (var i=0; i<srchRslts.length; i++) {
    //   if (businessid == srchRslts[i].id) {
    //     var lat = srchRslts[i].coordinates.latitude;
    //     var lng = srchRslts[i].coordinates.longitude;
    //     console.log(lat, ",", lng);
    //     break;
    //   };
    // }

  //calls yelp's business api based on id of the link clicked in the search results
    $scope.$on('$routeChangeSuccess', function () {
      $http.get('/api/business', {params: {id: businessid}}).success(function(response) {
        $scope.business = response;
        // console.log($scope.business);
      }).error(function(){
        console.log("error");
      });
    });
  });
})();
