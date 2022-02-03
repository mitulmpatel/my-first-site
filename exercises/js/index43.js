let game = "game of thrones";
let firstChar, secondChar, thirdChar;

firstChar = game.charAt(0);
secondChar = game.charAt(5);
thirdChar = game.charAt(8);

let result = firstChar.concat(secondChar,thirdChar).toUpperCase();
console.log(`the final result is: ${result}`);
