(function (){

var app = angular.module("mainMod", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/about", {
    templateUrl:"views/about.html"
  }),
  $routeProvider.when("/searchresults", {
    templateUrl:"views/results.html",
    controller:"getSearchCtrl"
  }),
  $routeProvider.when("/place", {
    templateUrl:"views/place.html",
    controller:"businessCtrl"
  });
});

app.directive("resultView", function(){
  return {
    restrict: "E",
    templateUrl: "views/resultpartial.html",
    replace: false
  }
});

app.directive("businessForm", function(){
  return {
    restrict: "E",
    templateUrl: "views/formpartial.html",
    replace: false
  }
});

app.directive("commentsSection", function(){
  return {
    restrict: "E",
    templateUrl: "views/commentspartial.html",
    replace: false
  }
});





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





})();
