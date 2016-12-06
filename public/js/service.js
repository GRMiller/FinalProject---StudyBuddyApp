(function() {
var app = angular.module("mainMod", ["ngRoute"]);
//Service for user-submitted comments for feedback on venues
//Borrowed from Lab 15 (Madlibs)
app.service("mainMod", function(){
  function setWords(words){
    storedWords = words;
  }
  function getWords(){
    return storedWords;
  }
  return{
    setWords: setWords,
    getWords: getWords
  }
});
