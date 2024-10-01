const prompt = require("prompt-sync")();

//const firsNnumber = Number(prompt("enter the first number:	"));
//console.log("your number is the square root of" + firsNnumber * firsNnumber )
/*caluclating the square root number */

// let theNumber = Number(prompt("pick a number"));
// if (!Number.isNaN(theNumber)) {
// 	console.log("your number is the square root of" + theNumber * theNumber)
// }

// let number = 1;
// let counter = 0
// while(counter < 12){
// 	console.log(number);
// 	number = number + 2;
// 	counter = counter +1
// }

// let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log("Hello " + yourName);

for (let i = 1; i <= 7; i++) {
  let cloumn = "";
  for (let j = 1; j <= i; j++) {
    cloumn = cloumn + "#";
  }
  console.log(cloumn);
}

/**pattern that print right triangle. */

/**pattern that print rectangle */ console.log("\n 2.");
for (let column = 1; column <= 5; column++) {
  let row = "";
  for (let rowN = 1; rowN <= 5; rowN++) {
    row += "#";
  }
  console.log(row);
}

console.log("\n 3.");
/*reverse right angle triangle*/
for (let a = 1; a <= 5; a++) {
  // console.log(a)
  let b = "";
  for (let bs = 5; bs >= a; bs--) {
    b += "#";
  }
  console.log(b);
}

console.log("\n3.");
for (let i = 1; i <= 7; i++) {
  let cloumn = "";
  for (let j = 1; j <= i; j++) {
    cloumn = cloumn + j;
  }
  console.log(cloumn);
}
