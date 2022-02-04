/*
# Exercise 58

* Create a new index58.js file
* Define a hour variable
* Asing the hour variable a value between 1 and 24
* If hour is bettwen 5 to 12 show the following message:  Good morning
* If hour is bettwen 12 to 18 show the following message: Good afternoon
* If hour is bettwen 18 to 22 show the following message: Good evening
* If hour is bettwen 22 to 5 show the following message:  Good night
* Change the hour value to test each case
*/

let hour = 13;

switch(hour){
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log("Goood Morning");
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        console.log("Goood afternoon");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
        console.log("Goood afternoon");
        break;
    case 23:
    case 24:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Goood afternoon");
        break;            
}