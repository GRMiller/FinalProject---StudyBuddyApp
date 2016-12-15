(function(){
var app = angular.module("mainMod");

  app.controller("getSearchCtrl", ["$scope", "$http", "searchResultsService", "commentsService", function ($scope, $http, searchResultsService, commentsService){
    var displayResults = function() {
      $scope.results = searchResultsService.getSearchResults();
      var reviews = commentsService.getComments(); //maybe rename so you can do .ratings instead on it
      $scope.ratings = reviews.avgRates;
      for(var i=0; i < $scope.results.length; i++) {
        for(var j=0; j< $scope.ratings.length; j++) {
          if($scope.results[i].id === $scope.ratings[j].businessid) {
            $scope.results[i] = Object.assign($scope.results[i], $scope.ratings[j]);
          }
        }
      }

    };
    $scope.$on('$routeChangeSuccess', function () {
      displayResults();
    });

    $scope.buttons = [
      {
        desc: "Quieter",
        prop: "+noise",
        class: "left"
      },
      {
        desc: "Noisier",
        prop: "-noise",
        class: "right"
      },
      {
        desc: "Fewer People",
        prop: "+crowd",
        class: "left"
      },
      {
        desc: "More People",
        prop: "-crowd",
        class: "right"
      },
      {
        desc: "Smaller",
        prop: "+size",
        class: "left"
      },
      {
        desc: "Larger",
        prop: "-size",
        class: "right"
      },
      {
        desc: "Fewer Outlets",
        prop: "+outlets",
        class: "left"
      },
      {
        desc: "More Outlets",
        prop: "-outlets",
        class: "right"
      },
      {
        desc: "Individual",
        prop: "+groups",
        class: "left"
      },
      {
        desc: "Group",
        prop: "-groups",
        class: "right"
      }
    ];

    $scope.sortBy = function(prop, index) {
      $scope.remProp = "!"+prop;
      $scope.prop = prop;
      $scope.selected = index;
    }
  }]);
})();
