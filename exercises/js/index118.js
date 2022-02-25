/*
# Exercise 118

* Create a new index118.js file
* Define a grades variabe and assign an array with 10 numbers from 1 to 10
* Define a result variable and assign the result value of adding the first, third, fifth and last number from the grades array
*/

const grades = [1,2,3,4,5,6,7,8,9,10];
const result = grades[0] + grades[2] + grades[4] + grades[grades.length - 1];
console.log(result);