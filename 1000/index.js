var fs = require("fs");

let input = fs
  .readFileSync("1000/example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((row) => Number(row));

const a = input[0];
const b = input[1];

console.log(a + b);
