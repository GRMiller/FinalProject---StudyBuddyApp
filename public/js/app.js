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
    controller: "businessCtrl",
    templateUrl:"views/place.html"
  });
});

app.directive("resultView", function(){
  return {
    restrict: "E",
    templateUrl: "views/resulttile.html",
    replace: false
  }
});












})();
