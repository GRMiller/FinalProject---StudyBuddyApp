(function () {
var app = angular.module("mainMod");

app.factory("searchResultsService", function(){
var searchResults;

 return {
   setSearchResults: function(response) {
     searchResults = response.businesses;
     console.log("srchRsltSrvce: ",searchResults);
     return searchResults;
   },
   getSearchResults: function() {
     return searchResults;
   }
 }

});


})();
