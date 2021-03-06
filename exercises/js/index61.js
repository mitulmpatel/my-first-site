/*
# Exercise 61

* Create a new index61.js file
* Define weekdayNumber and assign a numeric value between 1 and 7
* If weekday number is 1 show the following message: Today it's Monday
* If weekday number is 2 show the following message: Today it's Tuesday
* If weekday number is 3 show the following message: Today it's Wednesday
* If weekday number is 4 show the following message: Today it's Thursday
* If weekday number is 5 show the following message: Today it's Friday
* If weekday number is 6 show the following message: Today it's Saturday
* If weekday number is 7 show the following message: Today it's Sunday
* If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7

## Switch version:
* Use a switch statement to show weekday name using the weekday variable value

## IF/ELSE/IF version:
* After the switch version create the same functionality but using if/else/if statement

* Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value

## Refactor
* Once you have the code working for both statements refactor the code as follows
  * Don't use console.log() inside the switch statement
  * Instead add a message variable so each case only adds the selected weekname message
  * Use only one console.log() after the switch statement to show the result and error
*/

let weekdayNumber = 8;
let result;
switch(weekdayNumber){
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6: 
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;
    default:
        result = 'Error: Please input a number bettwen 1 and 7';
        break;
}

console.log(result);