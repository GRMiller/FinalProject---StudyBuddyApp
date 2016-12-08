(function() {
var app = angular.module("mainMod");

app.factory("commentsService", function(){
  var userComments = {
      comments: [
        { //review1 - GRAND CIRCUS
          businessid: "grand-circus-detroit",
          userinput: {
            username: "Grant",
            comment: "A great place to get work done!",
            ratings: {
              noise: 3,//1-5
              crowd: 2,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review2 - GRAND CIRCUS
          businessid: "grand-circus-detroit",
          userinput: {
            username: "Chirpus",
            comment: "Such a friendly place! I love it here!",
            ratings: {
              noise: 4,//1-5
              crowd: 4,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review3 - ASHE
          businessid: "ashe-supply-co-detroit-2",
          userinput:{
            username: "John Smith",
            comment: "Pros: It's coffee. Cons: It's money.",
            ratings:{
              noise: 3,
              crowd: 3,
              size: 2,
              outlets: 2,
              groups: 4
            }
          }
        },
        {//review4 - ASHE
          businessid: "ashe-supply-co-detroit-2",
          userinput:{
            username: "Betty Rogers",
            comment: "Great service and excellent coffee and pastries! I love working here by myself when I'm downtown! The office building above's entrance is in the same room as the shop so sometimes it gets a little noisy with all the foot traffic and the tables aren't the best for group projects. All in all, it's a terrific place though and I definitely recommend it to get stuff done!",
            ratings: {
              noise:3,
              crowd:4,
              size:3,
              outlets:2,
              groups:2
            }
          }
        },
        {//review5 - ASTRO
          businessid: "astro-coffee-detroit",
          userinput:{
            username: "Danger Rodneyfield",
            comment: "This place has a good atmosphere to work in. I love the background sounds of the coffeeshop!",
            ratings: {
              noise:5,
              crowd:4,
              size:3,
              outlets:3,
              groups:2
            }
          }
        },
        {//review5 - GREAT LAKES COFFEE
          businessid: "great-lakes-coffee-roasting-company-detroit",
          userinput: {
            username: "Java Joe",
            comment: "Such a great ambience in this place! They have big communal tables that are perfect for group projects",
            ratings: {
              noise:4,
              crowd:5,
              size:5,
              outlets:3,
              groups:5
            }
          }
        },
      ]
    };

  return {
    setComments: function(reviews) {
      userComments.comments.push(reviews);
      console.log("setComments: ", userComments.comments);
    },

    getComments: function() {
      console.log("getComments: ", userComments.comments);
      return userComments.comments;
    }
  };
});

})();
