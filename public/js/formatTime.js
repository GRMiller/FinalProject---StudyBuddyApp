(function () {
var app = angular.module('mainMod');


app.controller('timeCtrl', function ($scope){

  getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'pm' : 'am';
    var minutes = fourDigitTime.substring(2);
    console.log(hours + ':' + minutes + amPm);
    return hours + ':' + minutes + amPm;
  };

  getFormattedTime("0000"); //function works
  /* replace numeric entities*/

var miltime = document.getElementsByClassName('militarytime');
console.log(miltime);

miltime.forEach(getFormattedTime(miltime.textContent.toString()));


  // var oldtime=document.getElementsByClassName('militarytime');
  //   console.log(oldtime);
  // oldtime.each(function() {
  //   oldtime.text(getFormattedTime(oldtime).text());
  // })
});


})();
