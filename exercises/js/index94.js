/*# Exercise 94

* Create a new index94.js file
* Copy and paste the code from exercise 84
* Refactor the code to use for instead of do/while
*/

for (let i = 1; i < 13; i += 2) {
    let str = "";
    let output = "";

    for (let j = 1; j <= i; j++) {
        str = str.concat("*");

    }
    console.log(str);
}