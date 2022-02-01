let firstName = 'Mitulkumar';
let lastName = 'Patel'
let firstNameLength = firstName.length;
let lastNameLength = lastName.length;
let difference = firstNameLength - lastNameLength;
let result = firstNameLength > lastNameLength;

console.log(`My first name is ${firstName} and it is ${firstNameLength} characters long`);
console.log(`My last name is ${lastName} and it is ${lastNameLength} characters long`);
console.log(`The character difference between my first name and last name is ${difference}`);
console.log(`My first name is longer than my last name: ${result}`);