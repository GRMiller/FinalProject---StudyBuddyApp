(function(){
var app = angular.module("mainMod");

app.controller("indexCtrl", ["$scope", "$location", function ($scope, $location){
  $scope.hidden = true;
  $scope.$on('$routeChangeSuccess', function () {
    if($location.$$path==="/") {  
      $scope.hidden = true;
    } else {
      $scope.hidden = false;
    }
  });


}]);

})();
