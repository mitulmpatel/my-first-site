/*
# Exercise 65

* Create a new index65.js file
* Define a balance variable and assign the value 0
* If balance is truthy and bigger than 0 then show the following message: Your balance is: %balance%
* If balance is falsy show the following message: Sorry, no money in your account
* Now change the balance value to 100 and run the code again
*/

let balance = 10;
if (balance && balance > 0) {
    console.log(`Your balance is: ${balance}`);
}
if (!balance) {
    console.log(`Sorry, no money in your account`);
}
