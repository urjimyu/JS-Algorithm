const fs = require("fs");
const [n, ...input] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const arr = input.map((m) => m.split(" ").map(Number));

function rooms(n, arr) {
	let answer = 0;
	let sorted_arr = arr.sort((a, b) => a[1] - b[1]);
	let prev = 0;

	for (let i = 0; i < n; i++) {
		if (prev > sorted_arr[i][0]) continue;
		else {
			prev = sorted_arr[i][1];
			answer += 1;
		}
	}

	return answer > n ? n : answer;
}

console.log(rooms(n, arr));
