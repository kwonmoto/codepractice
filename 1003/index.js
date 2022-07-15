// readFileSync('/dev/stdin')
let input = fs.readFileSync("1003/example.txt").toString().trim().split("\n");
var cnt = input[0];
var inputlist = input.slice(1);

const countFibonacci = (n) => {
  const returnObj = {
    zeroCount: [1, 0],
    oneCount: [0, 1],
  };

  if (n <= 1) {
    return returnObj;
  }

  for (let i = 2; i < n + 1; i++) {
    returnObj.zeroCount.push(
      returnObj.zeroCount[i - 1] + returnObj.zeroCount[i - 2]
    );
    returnObj.oneCount.push(
      returnObj.oneCount[i - 1] + returnObj.oneCount[i - 2]
    );
  }

  return returnObj;
};

// 미리 40까지의 list를 생성
const cache = countFibonacci(40);

for (let i = 0; i < cnt; i++) {
  num = inputlist[i];
  console.log(`${cache.zeroCount[num]} ${cache.oneCount[num]}`);
}
