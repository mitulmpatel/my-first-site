/*
# Exercise 120

* Create a new index120.js file
* Define a students variable and assign an empty array
* Assing students values in the following indexes: 0, 1, 2, 3, 4 and 5
* Show the index number and value as otput:
```
index 0: Marta
```
*/

const students = [];
students[0]="Jay";
students[1]="Marta";
students[2]="Joe";
students[3]="Doe";
students[4]="Kalie";
console.log(students.length);
for(i=0;i<students.length;i++){
    console.log(`${i}: ${students[i]}`);
}
