/*# Exercise 99

* Create a new index99.js file
* Add all even numbers bettwen 0 and 1000 using for statement
* The iteration must break after finding the first 20 even numbers
* Show the result as output
*/
for (let i = 0; i < 10000; i++) {
    if (i % 2) {
        console.log(i);
    }

    if (i >= 20) {
        break;
    }
}