const fs = require("fs");
const [N, A, M, nums] = fs
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class2/test.txt")
	.toString()
	.trim()
	.split("\n");

function findNum(A, nums) {
	const answer = [];
	const arrA = A.split(" ");
	const arrNums = nums.split(" ");

	arrNums.forEach((nums) => answer.push(arrA.includes(nums) ? 1 : 0));
	return console.log(answer.join("\n"));
}

findNum(A, nums);
