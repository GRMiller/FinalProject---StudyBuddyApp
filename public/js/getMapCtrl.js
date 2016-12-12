(function(){
var app = angular.module('mainMod');

app.controller('mapCtrl', function ($scope, $routeParams, searchResultsService){
//
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
//
//     var map;
//     function initMap() {
//     console.log("initMap runs");
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat:42.3604245386228, lng:-83.0664246698505},
//        zoom:8
//      });
//    };
//   });
// });
//
// // });

// app.directive("uiGmapGoogleMaps", function (){
//   var link = function($scope, element, attrs) {
//     var map, infoWindow;
//     var markers = [];
//
//     // map config
//     var mapOptions = {
//       center: new google.maps.LatLng(lat, lng),
//       zoom: 8,
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       scrollwheel: false
//     };
//
//     // init the map
//     function initMap() {
//       if (map === void 0) {
//           map = new google.maps.Map(element[0], mapOptions);
//       }
//     }
//
//     // place a marker
//     function setMarker(map, position, title, content) {
//       var marker;
//       var markerOptions = {
//           position: position,
//           map: map,
//           title: title,
//           icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
//       };
//
//         marker = new google.maps.Marker(markerOptions);
//         markers.push(marker); // add marker to array
//
//         google.maps.event.addListener(marker, 'click', function () {
//             // close window if not undefined
//             if (infoWindow !== void 0) {
//                 infoWindow.close();
//             }
//             // create new window
//             var infoWindowOptions = {
//                 content: content
//             };
//             infoWindow = new google.maps.InfoWindow(infoWindowOptions);
//             infoWindow.open(map, marker);
//         });
//       }
//
//       // show the map and place some markers
//       initMap();
//
//       setMarker(map, new google.maps.LatLng(42.35031, -83.06018), 'Great Lakes Coffee Shop', 'Just some content');
//       setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
//       setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
//       };
//
//       return {
//       restrict: 'A',
//       template: '<div id="gmaps"></div>',
//       replace: true,
//       link: link
//       };
//     });
  });
})();
