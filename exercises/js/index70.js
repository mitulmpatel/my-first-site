/*
# Exercise 70

* Create a new index70.js file
* Use while structure to only sum odd numbers between 0 and 1000
* Show the partial result as output too
*/
let loop=0,sum=0;
while(loop<=100){
    if(loop%2){
        sum +=loop;
        console.log(sum);
    }
    loop++;
}