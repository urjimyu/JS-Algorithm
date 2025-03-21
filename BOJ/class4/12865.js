const path = require('path');
const filePath = path.join(__dirname, 'test.txt');

const [inputs, ...combis] = require('fs')
  //   .readFileSync('./dev/stdin')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, k] = inputs.split(' ').map(Number);
const vals = combis.map((combi) => combi.split(' ').map(Number));

function solution() {
  let answer = 0;

  const memo = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      let [w, v] = vals[j - 1];
      if (w > i) {
        memo[i][j] = memo[i][j - 1];
      } else {
        memo[i][j] = Math.max(memo[i][j - 1], memo[i - w][j - 1] + v);
      }
    }
  }
  answer = memo[k][n];
  return answer;
}

const val = solution();
console.log(val);
