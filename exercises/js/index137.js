/*
# Exercise 137

* Create a new index137.js file
* Define a numbers array with values between 1 and 1000
* Iterate over each numbers item using `map` and `increment` the value in 10
```
If value is 1 then it should be 11
If value is 2 then it should be 12
and so on..
```
* Show the following output for each element: 

```
index: 1, original number: 1, incremented value: 11
```
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map(function (val, ind) {
    console.log(`index: ${ind}, original number: ${val}, incremented number: ${ind + 10}`);
    return val + 10;
});
console.log(newNumbers);