function Minus(a, b = 10) {
  if (b === undefined) return -a;
  else return a-b;
}

console.log(Minus(10, 50));