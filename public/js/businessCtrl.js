(function () {
var app = angular.module("mainMod");
//controller for the view of each individual location

app.controller("businessCtrl",function($scope, $route, $routeParams) {
  var businessid = $route.current.params;
  // console.log(businessid);
  $scope.business = businessid;
  //I have nooooo idea how to properly set this up
});


})();
