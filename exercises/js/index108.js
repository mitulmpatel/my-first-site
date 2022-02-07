/*
# Exercise 108

* Create a new index108.js file
* Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
* The function must sort the params values from lower to higher
* Call the function with the following parameters: 10, 8, 25
* Show the following result as output: 8, 10, 25
* Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
* If highToLow is true then you need to show the following output: 25, 10, 8
* Call the function again with the following parameters: 10, 8, 25, true
*/

let sort = function (number1, number2, number3, highToLow) {
    const numbers = [number1, number2, number3];
    if (highToLow) {
        const numbersArray = numbers.sort((a, b) => b - a);
        return numbersArray.join(', ');
    } else {
        const numbersArray = numbers.sort((a, b) => a - b);
        return numbersArray.join(', ');
    }
}

console.log(sort(10, 8, 25, true));