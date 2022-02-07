/*
# Exercise 100

* Create a new index100.js file
* Define a function that will show even numbers from 0 to 100 as output
*/

let evenNumber = () => {
    for (let i = 0; i < 100; i++) {
        if (i % 2) {
            console.log(i);
        }
    }
}

evenNumber()