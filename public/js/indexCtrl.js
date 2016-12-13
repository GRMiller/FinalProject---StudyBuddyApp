(function(){
var app = angular.module("mainMod");

app.controller("indexCtrl", ["$scope", "$location", function ($scope, $location){
  $scope.hidden = true;
  $scope.$on('$routeChangeSuccess', function () {
    if($location.$$path==="/") {   ///nothing not working, but is "$$path" a typo?
      $scope.hidden = true;
    } else {
      $scope.hidden = false;
    }
  });


}]);

})();
