(function(){
var app = angular.module('mainMod');

app.controller('mapCtrl', function ($scope, $route, $routeParams, searchResultsService){

    // gets coordinates from searchResultsService and sets as parameters for google maps
    var businessid = $route.current.params.businessid;
    var srchRslts = searchResultsService.getSearchResults();
    console.log(srchRslts);
    console.log(businessid);
    for (var i=0; i<srchRslts.length; i++) {
      if (businessid == srchRslts[i].id) {
        var lat = srchRslts[i].coordinates.latitude;
        var lng = srchRslts[i].coordinates.longitude;
        // var name = srchRslts[i].name;
        console.log(lat, ",", lng);
        break;
      };
    }

    //specificies dependencies of new map
    var mapOptions = {
      zoom:16,
      center: new google.maps.LatLng(lat,lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    //displays new map
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions)

    $scope.marker = [];
    // var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (lat,lng) {

      var marker= new google.maps.Marker ({
        map:$scope.map,
        position: new google.maps.LatLng(lat,lng),
      });

      $scope.marker.push(marker);
    };

    createMarker(lat,lng);
  });
})();

    //IN CASE WE WANT TO CHANGE IT TO AN API CALL, OTHER ALTERNATIVE IS TO MOVE IT INTO BUSINESSCTRL

//   var businessid = $route.current.params.businessid;
//
// // calls yelp's business api based on id of the link clicked in the search results
// $scope.$on('$routeChangeSuccess', function () {
//   $http.get('/api/business', {params: {id: businessid}}).success(function(response) {
//     $scope.business = response;
//     console.log($scope.business);
//     console.log("Lat: ", $scope.business.coordinates.latitude, ",", "Lng: ", $scope.business.coordinates.longitude);
//
//     var lat = $scope.business.coordinates.latitude;
//     var lng = $scope.business.coordinates.longitude;
