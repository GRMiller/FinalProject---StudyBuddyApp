(function () {
var app = angular.module("mainMod");

//controller for the view of each individual location
  app.controller("businessCtrl",["$scope","$route","$routeParams","$http","commentsService","timeStore", function($scope, $route, $routeParams, $http, commentsService, timeStore) {
    var businessid = $route.current.params.businessid;
    var allReviews = commentsService.getComments();

    //calls yelp's business api based on id of the link clicked in the search results
    $scope.$on('$routeChangeSuccess', function () {
      $http.get('/api/business', {params: {id: businessid}}).success(function(response) {
        $scope.business = response;
        timeStore.setTime(response);
        $scope.hours = timeStore.getTime();

        // uses Yelp's business API to get coordinates for Google maps
            var lat = $scope.business.coordinates.latitude;
            var lng = $scope.business.coordinates.longitude;

            var mapOptions = {
              zoom:16,
              center: new google.maps.LatLng(lat,lng),
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false
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


      }).error(function(){
        console.log("error");
      });

      //loops through and displays avgRates
      for(var i = 0; i < allReviews.avgRates.length; i++) {
        if(allReviews.avgRates[i].businessid === businessid) {
          $scope.ratings = allReviews.avgRates[i];
        }
      }

    }); //end $on
  }]); //end controller
})(); //end IFFE
