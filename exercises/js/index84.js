/*
# Exercise 84

* Create a new index84.js file
* Copy and paste the code from exercise 74
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
    i+=2;
} while(i<13)