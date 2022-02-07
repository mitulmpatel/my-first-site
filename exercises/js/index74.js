/*
# Exercise 74

* Create a new index74.js file
* Show the following output using while:
```
*
***
*****
*******
*********
***********
*************
```
*/
let i=1;
while(i<13){
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
}