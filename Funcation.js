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

var isEven = function (N) {
  if (N == 0) {
    console.log(`${N} is even`);
    return true;
  } else if (N == 1) {
    console.log(`${N} is  odd`);
    return false;
  } else {
    return isEven(N - 2);
  }

  isEven();
};

// console.log(isEven(50));
// console.log(isEven(75));
console.log(isEven(-1));

function Minus(a, b = 10) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(Minus(10, 50));
