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
        }
      ],
      allRates: [
        {
          businessid: "grand-circus-detroit",
          noise: [3, 4],
          crowd: [2, 4],
          size: [5, 5],
          outlets: [5, 5],
          groups: [5, 5]
        },
        {
          businessid: "ashe-supply-co-detroit-2",
          noise: [3, 3],
          crowd: [3, 4],
          size: [2, 3],
          outlets: [2, 2],
          groups: [4, 2]
        },
        {
          businessid: "astro-coffee-detroit",
          noise: [5],
          crowd: [4],
          size: [3],
          outlets: [3],
          groups: [2]
        },
        {
          businessid: "great-lakes-coffee-roasting-company-detroit",
          noise: [5],
          crowd: [4],
          size: [3],
          outlets: [3],
          groups: [2]
        }
      ],
      avgRates: []
    };

function avgOfRates(array) {
  var sum;
  array.reduce(function(a, b) {
    sum = a + b;
    return sum;
  }, 0);
  var avg = sum/array.length;
  return avg;
}
//calculates averages for each business
function getAverage() {
  userComments.avgRates = [];
  for(var k = 0; k < userComments.allRates.length; k++) {
    userComments.avgRates.push(
      {
       businessid: userComments.allRates[k].businessid,
       noise: avgOfRates(userComments.allRates[k].noise).toFixed(1),
       crowd: avgOfRates(userComments.allRates[k].crowd).toFixed(1),
       size: avgOfRates(userComments.allRates[k].size).toFixed(1),
       outlets: avgOfRates(userComments.allRates[k].outlets).toFixed(1),
       groups: avgOfRates(userComments.allRates[k].groups).toFixed(1)
      }
      );
  }
}
  return {
    setComments: function(reviews) {
      userComments.comments.push(reviews);
      for(var j =0; j < userComments.allRates.length; j++) {
        if(userComments.allRates[j].businessid===reviews.businessid){
          userComments.allRates[j].noise.push(Number(reviews.userinput.ratings.noise));
          userComments.allRates[j].crowd.push(Number(reviews.userinput.ratings.crowd));
          userComments.allRates[j].size.push(Number(reviews.userinput.ratings.size));
          userComments.allRates[j].outlets.push(Number(reviews.userinput.ratings.outlets));
          userComments.allRates[j].groups.push(Number(reviews.userinput.ratings.groups));
        }
      }
    },

    getComments: function() {
      getAverage();
      return userComments;
    }
  };
});

})();
