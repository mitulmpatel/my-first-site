/*
# Exercise 83

* Create a new index83.js file
* Copy and paste the code from exercise 73
* Refactor the code to use do/while instead of while
*/

let i=13;
do {
    let str = "";
    let output ="";
    let j = i;
    while(j>=0){
        //console.log(j);
        str = str.concat("*");
        j--;
    }
    console.log(str);
    //console.log("########");
    i--;
} while(i>=0)