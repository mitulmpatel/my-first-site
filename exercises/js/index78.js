/*
# Exercise 78

* Create a new index78.js file
* Copy and paste the code from exercise 68
* Refactor the code to use do/while instead of while
*/
let loop=0;
do {
    if(loop%2===0){
        console.log(`${loop}`);
    }
    loop++;
} while(loop<=100)