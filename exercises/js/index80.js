/*

# Exercise 80

* Create a new index80.js file
* Copy and paste the code from exercise 70
* Refactor the code to use do/while instead of while
*/

let loop=0,sum=0;
do {
    if(loop%2){
        sum +=loop;
        console.log(sum);
    }
    loop++;
} while(loop<=100)