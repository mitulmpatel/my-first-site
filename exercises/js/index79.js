/*

# Exercise 79

* Create a new index79.js file
* Copy and paste the code from exercise 69
* Refactor the code to use do/while instead of while

*/

let loop = 0, sum = 0;
do {
    sum += loop;
    console.log(sum);
    loop++;
} while (loop <= 100)