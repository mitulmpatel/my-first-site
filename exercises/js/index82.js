/*
# Exercise 82

* Create a new index82.js file
* Copy and paste the code from exercise 72
* Refactor the code to use do/while instead of while
*/
let i=1;
do {
    let str = "";
    let output ="";
    let j = 1;
    while(j<=i){
        //console.log(j);
        str = str.concat("*");
        j++;
    }
    console.log(str);
    //console.log("########");
    i++;
} while(i<13)