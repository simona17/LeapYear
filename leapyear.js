"use strict";
exports.__esModule = true;
function leapYear(year) {
    if (year % 400 === 0)
        return ('Leap year!');
    else if (year % 100 === 0)
        return ('Not a leap year!');
    else if (year % 4 === 0)
        return ('Leap year!');
    else
        return ('Not a leap year');
}
var year;
console.log(leapYear(2016));
exports["default"] = leapYear;
