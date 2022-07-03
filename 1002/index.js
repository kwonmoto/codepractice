var fs = require("fs");

// readFileSync('/dev/stdin')
let input = fs
  .readFileSync("1002/example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" "));

const cases = Number(input[0]);

const distance = (i) =>
  Math.sqrt(
    Math.pow(Number(input[i][0]) - Number(input[i][3]), 2) +
      Math.pow(Number(input[i][1]) - Number(input[i][4]), 2)
  );

const distSum = (i) => Math.abs(input[i][2]) + Math.abs(input[i][5]);
const distMinus = (i) => Math.abs(Number(input[i][2]) - Number(input[i][5]));

function solution() {
  for (let i = 1; i <= cases; i++) {
    let sol = 0;
    if (distance(i) === 0 && distMinus(i) === 0) {
      sol = -1;
    } else if (distance(i) === 0 && distMinus(i) !== 0) {
      sol = 0;
    } else if (distance(i) === distSum(i) || distance(i) === distMinus(i)) {
      sol = 1;
    } else if (distance(i) > distMinus(i) && distance(i) < distSum(i)) {
      sol = 2;
    } else if (distance(i) < distMinus(i) || distance(i) > distSum(i)) {
      sol = 0;
    }
    console.log(sol);
  }
}

solution();
