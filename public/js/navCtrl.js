(function(){
var app = angular.module('mainMod');

  app.controller("navCtrl", ["$scope", "$location", function ($scope, $location){
    $scope.class = "index_nav";
    $scope.$on('$routeChangeSuccess', function () {
      if($location.$$path==="/") {
        $scope.class = "index_nav";
      } else {
        $scope.class = "view_nav";
      }
    });
  }]);
})();
