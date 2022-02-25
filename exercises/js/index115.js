/*
# Exercise 115

* Create a new index115.js file
* Define a getLongerText that accepts two string values
* This function returns the longer text
* After calling the function show the longer word as output
* Call this function 3 times with different words
*/
let getLongerText = function (word1, word2) {
    if(word1.length > word2.length){
        return word1;
    } else {
        return word2;
    }
}

console.log(getLongerText('Mitul', 'BeenaPatel'));