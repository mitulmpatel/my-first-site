/*

# Exercise 72

* Create a new index72.js file
* Show the following output using while:
```
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
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
    i++;
}