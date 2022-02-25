/*
# Exercise 139

* Create a new index139.js file
* Define a numbers array with values between 1000 and 1
* Iterate over the numbers array and filter the following values creating new arrays for each type:
  * Even numbers
  * Odd numbers
* Show the last 10 odd numbers as output
* Show the first 20 even numbers as output
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(number){
    return number%2==0;
});
const oddNumbers = numbers.filter(function(number){
    return number%2;
});
console.log(evenNumbers);
console.log(oddNumbers);