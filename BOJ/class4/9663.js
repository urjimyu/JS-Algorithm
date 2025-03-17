const fs = require('fs');
const input = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('./test.txt')
  .toString()
  .trim();

const n = Number(input);
const queens = [];
let count = 0;

function possible(x, y) {
  for (const [a, b] of queens) {
    if (a === x || b === y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

function dfs(row) {
  if (row === n) {
    count++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop(); // 백트래킹 포인트
  }
}

dfs(0);

console.log(count);
