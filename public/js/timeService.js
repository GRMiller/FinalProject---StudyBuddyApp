(function () {
var app = angular.module("mainMod");

app.factory("timeStore", function(){

  var getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'pm' : 'am';
    var minutes = fourDigitTime.substring(2);
    return hours + ':' + minutes + amPm;
  };

  var formattedTime = [{day: "Mon"}, {day: "Tue"}, {day: "Wed"}, {day: "Thu"}, {day: "Fri"}, {day: "Sat"}, {day: "Sun"}];

   return {
     setTime: function(response) {
       openHrs = response.hours[0].open;
       for(var i = 0; i < openHrs.length; i++) {
         formattedTime[i] = Object.assign(formattedTime[i], {start: getFormattedTime(openHrs[i].start), end: getFormattedTime(openHrs[i].end)})
       }
       return formattedTime;
     },
     getTime: function() {
       return formattedTime;
     }
   }
 });
})();
