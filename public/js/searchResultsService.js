(function () {
var app = angular.module("mainMod");

app.factory("searchResultsService", function(){
  console.log("searchResultsService is linked correctly")
  var searchResults = {};

  function setSearchResults(response) {
    searchResults = response;
    console.log("set: ", searchResults);
    return searchResults;
  }

  function getSearchResults(response) {
    console.log("get: ", searchResults);
    return searchResults;
  }

  return {
    setSearchResults: setSearchResults,
    getSearchResults: getSearchResults
  }
});


})();
