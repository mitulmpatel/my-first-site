/*
# Exercise 75

* Create a new index75.js file
* Write a program that will show the first 10 Fibonacci sequence numbers

### Little help:
![Fibo](https://image.slidesharecdn.com/unit-3-foc-100107121122-phpapp01/95/unit-3-foc-81-728.jpg?cb=1262866393)
* [Wikipedia - Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number)
*/
let n = 10, f = 0, f1 = -1, f2 = 1;
while(f < n){

    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}