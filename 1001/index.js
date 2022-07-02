var fs = require("fs");

// readFileSync('/dev/stdin')
let input = fs
  .readFileSync("1001/example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((row) => Number(row));

const a = input[0];
const b = input[1];

console.log(a - b);
