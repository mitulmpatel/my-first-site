/*
# Exercise 138

* Create a new index138.js file
* Define a mutants array with the following values:
```
Professor X
Cyclops
Iceman
Angel
Magneto
Beast
Phoenix
Logan
Gambit
```

* Iterate over the mutants array
* Add <3 symbol before the mutant name if the iterated name is one of the following:

```
Professor X
Logan
Phoenix
Gambit
```

* Show the original mutant array items as output
* Show the updated mutant array items as output
*/

const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];

let modifiedMutants = mutants.map(function (mutant, ind) {
    let love = '<3 ';
    if (mutant == 'Professor X' || mutant == 'Logan' || mutant == 'Phoenix' || mutant == 'Gambit') {
        return love.concat(mutant);
    } else {
        return mutant;
    }
});

console.log(mutants);
console.log(modifiedMutants);