(function() {
var app = angular.module("mainMod");
//Service for user-submitted comments for feedback on venues
//Borrowed from Lab 15 (Madlibs)
app.factory("commentsService", function(){
  var userComments = {
      comments: []
    };

  return {
    setComments: function(reviews) {
      userComments.comments.push(reviews);
      console.log("setComments: ", userComments.comments);
    },

    getComments: function() {
      console.log(userComments.comments);
      return userComments.comments;
    }
  };
});

})();
