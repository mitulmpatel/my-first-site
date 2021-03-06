/*
# Exercise 130

* Create a new index130.js file
* Define a mutants array with the following values:

```
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
```

* Sort the list
* Reverse the sorted list
* Join all mutants name using the following text: '* '
* Show the following output:
  * Original mutants list
  * Sorted mutants list
  * Reversed mutants list
  * Mutants name separated by *
  * 
*/

const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix'
];

console.log(mutants);
const sortedMutant = mutants.sort();
console.log(sortedMutant);
const reverse = sortedMutant.reverse();
console.log(reverse);
console.log(mutants.join("* "));