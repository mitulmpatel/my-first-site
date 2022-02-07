/*# Exercise 95

* Create a new index95.js file
* Copy and paste the code from exercise 85
* Refactor the code to use for instead of do/while
*/


let n = 10;
for(let f = 0, f1 = -1, f2 = 1;f < n;){

    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}