exports.comments = [//is this supposed to be an array or an object??
  { //first business
    businessid: "grand-circus-detroit",
    userinput: [ //there might be a better way to organize this
      {
        username: "Grant",
        ratings: {
          noise: 3,//1-5
          crowd: 2,//1-5
          size: 5,//1-5
          outlets: 5,//1-5
          groups: 5//1-5
        },
        comment: "A great place to get work done!"
      },
      {
        username: "Chirpus",
        ratings: {
          noise: 4,//1-5
          crowd: 4,//1-5
          size: 5,//1-5
          outlets: 5,//1-5
          groups: 4//1-5
        },
        comment: "So many people! All the free parking is far away. =("
      }
    ]
  },
  { //second business
    businessid: "ashe-supply-co-detroit-2",
    userinput: [
      {
        username: "John Smith",
        ratings: {
          noise: 3,
          crowd: 3,
          size: 2,
          outlets: 2,
          groups: 4
        },
        comment: "Pros: It's coffee. Cons: It's money."
      }//,
      // {
      //   username: "",
      //   ratings: {
      //     // noise: ,
      //     // crowd: ,
      //     // size: ,
      //     // outlets: ,
      //     // groups:
      //   },
      //   comment: ""
      // }
    ]
  }
];
