(function () {
var app = angular.module("mainMod");

app.factory("searchTermsService", function(){

  var searchTerms = {};

  function setSearchTerms(userText) {
    searchTerms = userText;
    console.log("setTerms: ", searchTerms);
    return searchTerms;
  }

  function getSearchTerms(userText) {
    console.log("getTerms: ", searchTerms);
    return searchTerms;
  }

  return {
    setSearchTerms: setSearchTerms,
    getSearchTerms: getSearchTerms
  }
});


})();
