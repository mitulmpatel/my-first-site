/*# Exercise 103

* Create a new index103.js file
* Define a evenNumbers variable and assign a function as value
* When executed the evenNumbers function will print even numbers between 0 and 100 as output
* Execute this function 5 times
*/

let evenNumber = function () {
    for(let i=1; i<100;i+=2){
        console.log(`${i}`);
    }
}
evenNumber();