/*
# Exercise 73

* Create a new index73.js file
* Show the following output using while:
```
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
*
```
*/
let i=13;
while(i>=0){
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
}