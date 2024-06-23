const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, k] = input[0].split(" ");
const arr = input.slice(1).reverse();

function coins(n, k, arr) {
	let answer = 0;
	arr.forEach((coin) => {
		answer += Math.floor(k / coin);
		k %= coin;
	});
	return answer;
}

console.log(coins(n, k, arr));
