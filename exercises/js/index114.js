/*
# Exercise 114

* Create a new index114.js file
* Define a revert function that accepts a string parameter
* This function shows the reverted text parameter
* For example if you call the revert function with 'hello' the function will show: olleh
* Call this function using at least 5 different words :)
*/
let revert = function (str) {
    return str.split("").reverse().join("");
}
console.log(revert("hello"));
console.log(revert("hourse"));
console.log(revert("yellow"));
console.log(revert("twitter"));
console.log(revert("facebook"));