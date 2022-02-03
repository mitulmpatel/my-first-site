/*
# Exercise 53

* Create a new index53.js file
* Copy and paste the code from exercise 50
* Refactor the code so it match the new requirements:
  * If number is not even then show the following message: %number% is an odd number
*/

let num = 11;
if(num%2 == 0){
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}