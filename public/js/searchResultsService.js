(function () {
var app = angular.module("mainMod");

app.factory("searchResultsService", function(){

  var searchResults;

 return {
   setSearchResults: function(response) {
     searchResults = response.businesses;
     return searchResults;
   },
   getSearchResults: function() {
     return searchResults;
   }
 }

});


})();
