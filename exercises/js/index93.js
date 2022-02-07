/*# Exercise 93

* Create a new index93.js file
* Copy and paste the code from exercise 83
* Refactor the code to use for instead of do/while
*/

for (let i = 13; i >= 0; i--) {
    let str = "";
    let output = "";

    for (let j = i; j >= 0; j--) {
        str = str.concat("*");

    }
    console.log(str);
}