(function() {
var app = angular.module("mainMod");
//Service for user-submitted comments for feedback on venues
//Borrowed from Lab 15 (Madlibs)
app.factory("commentStore", function(){
  var comments;
  return {
    setComments: function(reviews) {
      comments = reviews;
    },
    getComments: function() {
      return comments;
    }
  };
});

})();
