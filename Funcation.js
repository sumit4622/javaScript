const prompt = require("prompt-sync")({ sigint: true });

function printingName(UserName) {
  console.log(`Welcome ${UserName} how are you.`);
}
// Here this function will print only "greeting message" if we try to print function we will get an error message.//

//const sumit = printingName("sumit");
//console.log(typeof (sumit));

// let x = 10;
if (true) {
  let y = 20; /** this is an local variable */

  var z = 30; /**it is an global varable cause it is declare with var keyword which is global declared */
}

// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");

// };

// const student = [
//   "Sumit Ray",
//   "Ranjesh Thakur",
//   "Aadarsh gandu",
//   "dibya maharjan",
//   "Riju badr",
// ];

// let fun = function gandu(allstudents, studentName) {
//   for (i = 0; i <= allstudents.length; i++) {
//     if (allstudents[i] === studentName) {
//       console.log(`found ${studentName}`);
//     }
//   }
// };

// fun(student, "Sumit Ray");

// function init() {
//   const FirstName = "sumit";
//   const FullName = "Sumit Ray";
//   function Fullname() {
//     console.log("hello" + " " + FullName);
//   }
//   return Fullname;
// }

// const Name = init();
// Name("Ranjesh");

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function multiplier(factor) {
//   return (number) => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));

// function findSolution(target) {
//   function find(current, history) {
//     if (current === target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return find(current + 5, `(${history} + 5)`) ??
//              find(current * 3, `(${history} * 3)`);
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

/*write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.*/

const min = function MiniNum(number1, Number2) {
  return Math.min(number1, Number2);
};

console.log(min(4, 6));
// => 4

/* 2. We’ve seen that we can use % (the remainder operator) to test whether a number is even  or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

    * Zero is even.

    * One is odd.

    * For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// var isEven = function (N) {
//   if (N == 0) {
//     console.log(`${N} is even`);
//     return true;
//   } else if (N == 1) {
//     console.log(`${N} is  odd`);
//     return false;
//   } else {
//     return isEven(N - 2);
//   }

//   isEven();
// };

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// function Minus(a, b = 10) {
//   if (b === undefined) return -a;
//   else return a - b;
// }

// console.log(Minus(10, 50));

/**You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function. */

function countBs(word) {
  count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countBs("BoB"));
// -> 2

function countChar(w, checking) {
  count = 0;
  for (let i = 0; i <= w.length; i++) {
    if (w[i] === checking) {
      count++;
    }
  }
  return count;
}
console.log(countChar("KaKKerlaK", "k"));
//  -> 4

function greeting() {
  console.log("we are doing Lab 2 this week.");
}
greeting();

function greeting2(name) {
  console.log(`I hope you are doing fine, ${name}`);
}
greeting2("sumit");

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 4));

function cal_division(num1, num2) {
  if (Number.isInteger(num1, num2)) {
    divi = num1 / num2;
    return `${num1} divided by ${num2} is ${divi.toFixed(2)}`;
  } else {
    return `please enter the valid number.`;
  }
}
console.log(cal_division(5, 2));

/*program using function that asks the user to enter a distance in Kilometers, then converts that
distance to miles. */

function converting(input) {
  let miles = input * 0.6214;
  return miles;
}

function asking() {
  let Kilometers = prompt("Enter the kilometer to convert into miles.");
  let miles = converting(Kilometers);
  console.log(`conversion is here ${miles.toFixed(4)}`);
}

asking();

function feet_to_inches(feet) {
  return feet * 12;
}

function main() {
  let input = prompt("Enter the number you want to cover into inches");
  let feet = parseFloat(input)
  let inches = feet_to_inches(input);
  console.log(`the ${input} is equal to ${inches}`);
}

main();


const name = 'Sumit';
const LName = "Ray";

let New_name =(name.concat(LName));
console.log(New_name.charAt(5));

const FullName = prompt("Enter your full name?");
length_Of_User = (FullName.length);
let userName = "@" + FullName + length_Of_User;
console.log(userName);


let superhero = ["sumit ray", "Pramod Ray", "Bipin Ray", "Dipak Ray", "Okil Ray", "Mokil Ray"]


// for loop

// for(let i = 0; i <superhero.length; i++) {
//   console.log(superhero[i]);
// }

//for of loop

for (let hero of superhero) {
  console.log(hero);
}

let marks_Of_Students = [85,97,44,37,76,60]
sum = 0
count = 0
for(let i = 0; i < marks_Of_Students.length; i++) {
  // sum += marks_Of_Students[i]
  console.log(i)
}
// console.log(sum)