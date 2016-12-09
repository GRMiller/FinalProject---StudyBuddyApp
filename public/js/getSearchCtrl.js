(function(){
var app = angular.module("mainMod");

app.controller("getSearchCtrl", ["$scope", "$http", "searchResultsService", "commentsService", function ($scope, $http, searchResultsService, commentsService){
  var displayResults = function() {
    $scope.results = searchResultsService.getSearchResults();
    $scope.ratings = commentsService.getComments(); //maybe rename so you can do .ratings instead on it
    // $scope.results = [];
    console.log($scope.results);
    console.log($scope.ratings);
    for(var i=0; i < $scope.results.length; i++) {
      for(var j=0; j< $scope.ratings.length; j++) {
        if($scope.results[i].id === $scope.ratings[j].businessid) {
          $scope.results[i] = Object.assign($scope.results[i], $scope.ratings[j]);
          console.log($scope.results[i]);
        }
      }
    }

// //for testing css
//     $scope.results = [
//       {id: "ashe-supply-co-detroit-2",
//       name: "ASHE Supply Co",
//       location: {address1:"1555 Broadway St", city: "Detroit", state: "MI"},
//       phone: "+13136722070",
//       price: "$",
//       image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/Of4-vpKop362aa_9m_EGSQ/o.jpg",
//       userinput:{
//         username: "John Smith",
//         comment: "Pros: It's coffee. Cons: It's money.",
//         ratings:{
//           noise: 3,
//           crowd: 3,
//           size: 2,
//           outlets: 2,
//           groups: 4
//         }
//       }
//     },
//     {id: "ashe-supply-co-detroit-2",
//     name: "Astro Coffee",
//     location: {address1:"1555 Broadway St", city: "Detroit", state: "MI"},
//     phone: "+13136722070",
//     price: "$",
//     image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/z60tKk_Fw6toEbu_s-v7aA/o.jpg",
//     userinput:{
//       username: "John Smith",
//       comment: "Pros: It's coffee. Cons: It's money.",
//       ratings:{
//         noise: 3,
//         crowd: 3,
//         size: 2,
//         outlets: 2,
//         groups: 4
//       }
//     }
//   },
//   {id: "ashe-supply-co-detroit-2",
//   name: "Roasting Plant",
//   location: {address1:"1555 Broadway St", city: "Detroit", state: "MI"},
//   phone: "+13136722070",
//   price: "$",
//   image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/7CPtU3nPBxPXREPVJV7ILg/o.jpg",
//   userinput:{
//     username: "John Smith",
//     comment: "Pros: It's coffee. Cons: It's money.",
//     ratings:{
//       noise: 3,
//       crowd: 3,
//       size: 2,
//       outlets: 2,
//       groups: 4
//     }
//   }
// },
//     ];


  };
  $scope.$on('$routeChangeSuccess', function () {
    displayResults();
  });

}]);



})();
