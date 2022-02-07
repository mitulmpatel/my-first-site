/*
# Exercise 90

* Create a new index90.js file
* Copy and paste the code from exercise 80
* Refactor the code to use for instead of do/while
*/

for (let loop = 0, sum = 0; loop <= 100; loop++) {
    if (loop % 2) {
        sum += loop;
        console.log(sum);
    }
}