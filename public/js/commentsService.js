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
        {//review6 - GREAT LAKES COFFEE
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
        { //review7 - AVALON
          businessid: "avalon-international-breads-detroit",
          userinput: {
            username: "Hermoine Granger",
            comment: "The pastries here are delightful! The tables are a little small for my liking but there's spots to sit outside in the summertime. It's quite nice with a book.",
            ratings: {
              noise: 2,//1-5
              crowd: 4,//1-5
              size: 1,//1-5
              outlets: 3,//1-5
              groups: 3//1-5
            }
          }
        },
        { //review8 - TRINOSOPHES
          businessid: "trinosophes-detroit",
          userinput: {
            username: "Ty Segall",
            comment: "Very spacious place. It's a good place to get a lot of people together.",
            ratings: {
              noise: 3,//1-5
              crowd: 2,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review9 - CAMPUS MARTIUS
          businessid: "campus-martius-park-detroit",
          userinput: {
            username: "Steffi Graff",
            comment: "This place is awesome in the summer! Beautiful park right in the middle of downtown with an Au Bon sandwhich shop right in the park and plenty of places around. I wouldn't come here right before finals, but it's a great place to meet a friend and go over an idea or catch up on some reading!",
            ratings: {
              noise: 5,//1-5
              crowd: 5,//1-5
              size: 5,//1-5
              outlets: 1,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review10 - COFFEE &
          businessid: "coffee-and-detroit-3",
          userinput: {
            username: "Yoda",
            comment: "Peacefulness and productivity, find here you will",
            ratings: {
              noise: 2,//1-5
              crowd: 2,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review10 B - COFFEE &
          businessid: "coffee-and-detroit-3",
          userinput: {
            username: "Garrett",
            comment: "Really friendly staff and amazing food. The place is generally never crowded with a steady stream of regulars. They have big tables and lots of outlets. It's great for individual work or to for group meetups!",
            ratings: {
              noise: 1,//1-5
              crowd: 3,//1-5
              size: 4,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review11 - JAVA HUTT
          businessid: "java-hutt-ferndale",
          userinput: {
            username: "Java Jill",
            comment: "Great environment in a great location! They have plenty of tables and lots of outlets, as well as some super awesome couches. I meet up with my friends here all the time to get stuff done or just chat! I recommend their pesto turkey panini. ;)",
            ratings: {
              noise: 3,//1-5
              crowd: 4,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 4//1-5
            }
          }
        },
        { //review12 - THE OFFICE COFFE SHOP
          businessid: "the-office-coffee-shop-royal-oak",
          userinput: {
            username: "April Ludgate",
            comment: "There's spiders in their coffee here. THIS PLACE IS THE BEST EVER!!!",
            ratings: {
              noise: 5,//1-5
              crowd: 5,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review13 - ATOMIC
          businessid: "atomic-coffee-royal-oak",
          userinput: {
            username: "Frank Sinatra",
            comment: "Excellent café. The kind of place where you can get stuff done.",
            ratings: {
              noise: 4,//1-5
              crowd: 5,//1-5
              size: 3,//1-5
              outlets: 3,//1-5
              groups: 4//1-5
            }
          }
        },
        { //review14 - DETROIT PUBLIC LIBRARY WSU
          businessid: "detroit-public-library-detroit-8",
          userinput: {
            username: "Joique Bell",
            comment: "I use to hit the books hard here all the time. There's a spot on the northeast corner of the second floor. It's tucked away, has a nice window. I'd hole up there the week before finals and READ.",
            ratings: {
              noise: 1,//1-5
              crowd: 1,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review15 - DETROIT PUBLIC LIBRARY MAIN
          businessid: "detroit-public-library-detroit-12",
          userinput: {
            username: "Cass Gilbert",
            comment: "The DPL has plenty of open tables to work with groups and even more nooks to solo study in. Excellent computer wing as well. It is an amazing building that's absolutely beautiful on the outside and spacious on the inside.",
            ratings: {
              noise: 1,//1-5
              crowd: 2,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review16 - BEAN AND LEAF
          businessid: "bean-and-leaf-royal-oak",
          userinput: {
            username: "Anita Baker",
            comment: "Bean & Leaf has everything you want in a neighborhood coffeeshop. It's social with plenty of stuff going on around you, but if you need to get something done - it's the place to go.",
            ratings: {
              noise: 4,//1-5
              crowd: 5,//1-5
              size: 3,//1-5
              outlets: 4,//1-5
              groups: 3//1-5
            }
          }
        },
        { //review17 - FERNDALE PUBLIC LIBRARY
          businessid: "ferndale-public-library-ferndale",
          userinput: {
            username: "Jack White",
            comment: "Good place to get stuff done on your own, there's few distractions here. Not good for groups though, they don't like it if you get too loud.",
            ratings: {
              noise: 1,//1-5
              crowd: 2,//1-5
              size: 3,//1-5
              outlets: 5,//1-5
              groups: 1//1-5
            }
          }
        },
        { //review18 - DETROIT INSTITUTE BAGEL
          businessid: "detroit-institute-of-bagels-detroit-2",
          userinput: {
            username: "Ron Swanson",
            comment: "People are nice here. They leave me alone. I like it. I can get a lot done... And they put extra bacon on my egg sandwhich",
            ratings: {
              noise: 3,//1-5
              crowd: 3,//1-5
              size: 3,//1-5
              outlets: 3,//1-5
              groups: 3//1-5
            }
          }
        },
        { //review19 - GOLDFISH TEA
          businessid: "goldfish-tea-royal-oak",
          userinput: {
            username: "Ernest Younger",
            comment: "Their tea is so good here, but their tables are an awkward height and they have very few booths. If it weren't for their limited seating and small tables I'd go here more often!",
            ratings: {
              noise: 4,//1-5
              crowd: 4,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
            }
          }
        },
        { //review20 - BELLE ISLE PARK
          businessid: "belle-isle-park-detroit-2",
          userinput: {
            username: "Frederick Law Olmstead",
            comment: "If you like to work outside, there's no better place. There's a million different picnic tables and shelters you can spread your stuff out on. I like the pavillions on the northside, by the beach. I'll often take my stuff to go swimming when I'm done with my work.",
            ratings: {
              noise: 4,//1-5
              crowd: 4,//1-5
              size: 5,//1-5
              outlets: 5,//1-5
              groups: 5//1-5
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
        },
        {
          businessid: "avalon-international-breads-detroit",
          noise: [2],
          crowd: [4],
          size: [1],
          outlets: [3],
          groups: [3]
        },
        { //review7 - AVALON
          businessid: "avalon-international-breads-detroit",
          noise: [2],
          crowd: [4],
          size: [1],
          outlets: [3],
          groups: [3]

        },
        { //review8 - TRINOSOPHES
          businessid: "trinosophes-detroit",
          noise: [3],
          crowd: [2],
          size: [5],
          outlets: [5],
          groups: [5]
        },
        { //review9 - CAMPUS MARTIUS
          businessid: "campus-martius-park-detroit",
          noise: [5],
          crowd: [5],
          size: [5],
          outlets: [1],
          groups: [5]
        },
        { //review10 - COFFEE &
          businessid: "coffee-and-detroit-3",
          noise: [2,1],
          crowd: [2,3],
          size: [5,4],
          outlets: [5,5],
          groups: [5,5]
        },
        { //review11 - JAVA HUTT
          businessid: "java-hutt-ferndale",
          noise: [3],
          crowd: [4],
          size: [5],
          outlets: [5],
          groups: [4]
        },
        { //review12 - THE OFFICE COFFE SHOP
          businessid: "the-office-coffee-shop-royal-oak",
          noise: [5],
          crowd: [5],
          size: [5],
          outlets: [5],
          groups: [5]
        },
        { //review13 - ATOMIC
          businessid: "atomic-coffee-royal-oak",
          noise: [4],
          crowd: [5],
          size: [3],
          outlets: [3],
          groups: [4]
        },
        { //review14 - DETROIT PUBLIC LIBRARY WSU
          businessid: "detroit-public-library-detroit-8",
          noise: [1],
          crowd: [1],
          size: [5],
          outlets: [5],
          groups: [5]
        },
        { //review15 - DETROIT PUBLIC LIBRARY MAIN
          businessid: "detroit-public-library-detroit-12",
          noise: [1],
          crowd: [2],
          size: [5],
          outlets: [5],
          groups: [5]
        },
        { //review16 - BEAN AND LEAF
          businessid: "bean-and-leaf-royal-oak",
          noise: [4],
          crowd: [5],
          size: [3],
          outlets: [4],
          groups: [3]
        },
        { //review17 - FERNDALE PUBLIC LIBRARY
          businessid: "ferndale-public-library-ferndale",
          noise: [1],
          crowd: [2],
          size: [3],
          outlets: [5],
          groups: [1]
        },
        { //review18 - DETROIT INSTITUTE BAGEL
          businessid: "detroit-institute-of-bagels-detroit-2",
          noise: [3],
          crowd: [3],
          size: [3],
          outlets: [3],
          groups: [3]
        },
        { //review19 - GOLDFISH TEA
          businessid: "goldfish-tea-royal-oak",
          noise: [4],
          crowd: [4],
          size: [5],
          outlets: [5],
          groups: [5]
        },
        { //review20 - BELLE ISLE PARK
          businessid: "belle-isle-park-detroit-2",
          noise: [4],
          crowd: [4],
          size: [5],
          outlets: [5],
          groups: [5]
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
