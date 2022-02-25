/*
# Exercise 131

* Create a new index131.js file
* Define a femaleStudents array and assign 5 students
* Define a maleStudents array and assign 5 students
* Define a students array and assign all students name using the femaleStudents and maleStudents arrays
* Sort the students list
* Show the following output:
  1. Each **femaleStudents** name `using numeric indexes`
  2. Each **maleStudents** name `using while`
  3. Each **students** name `using for`
*/

const femaleStudents = ['mery', 'marta', 'jane', 'rabeka', 'monika'];
const maleStudents = ['jon','albert', 'rob', 'alex', 'jed'];

const students = femaleStudents.concat(maleStudents).sort();
let i=0;
while(i<maleStudents.length){
    console.log(maleStudents[i]);
    i++;
}
console.log("***********************");
for(student of students) {
    console.log(student);
}