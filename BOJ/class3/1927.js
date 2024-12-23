const fs = require("fs");
const [n, ...inputs] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

// function solution(n, arr) {
// 	let tmpArr = [];
// 	let answer = [];

// 	for (let i = 0; i < n; i++) {
// 		if (arr[i] === 0) {
// 			if (tmpArr.length === 0) answer.push(0);
// 			else {
// 				tmpArr.sort((a, b) => a - b);
// 				let num = tmpArr[0];
// 				tmpArr = tmpArr.slice(1);
// 				answer.push(num);
// 			}
// 		} else tmpArr.push(arr[i]);
// 	}

// 	return console.log(answer.join("\n"));
// }

// solution(n, inputs);
