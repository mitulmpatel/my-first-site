/*
# Exercise 59

* Create a new index59.js file
* Define firstNumber and secondNumber variables
* Assign a numeric value to previous defined variables
* If the first number equals the second number then show the following message: They are the same number
* If the first number is bigger than the second number then show the following message: %firstNumber% is bigger than %secondNumber%
* If the second number is bigger than the first number then show the following message: %secondNumber% is bigger than %firstNumber%
*/

let firstNumber = 10;
let secondNumber = 15;
if (firstNumber == secondNumber) {
    console.log("theya are ssame number");
} else if (firstNumber > secondNumber) {
    console.log(`${firstNumber} is bigger than ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    console.log(`${secondNumber} is bigger than ${firstNumber}`);
}