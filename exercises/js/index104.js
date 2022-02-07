/*
# Exercise 104

* Create a new index104.js file
* Define a fibonacci variable and assign a function value
* When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
* Execute this function 3 times
*/

let fibonacci = function () {
    let n = 10;
    for (let f = 0, f1 = -1, f2 = 1; f < n;) {

        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f);
    }
}

fibonacci()