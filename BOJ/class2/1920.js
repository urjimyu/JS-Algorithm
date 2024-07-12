const fs = require("fs");
const [N, A, M, nums] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

function findM(num, arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let centerIdx = Math.floor((left + right) / 2);
		if (num === arr[centerIdx]) return true;
		if (num > arr[centerIdx]) left = centerIdx + 1;
		if (num < arr[centerIdx]) right = centerIdx - 1;
	}
	return false;
}

function findNum(A, nums) {
	const answer = [];
	const arrA = A.split(" ")
		.map(Number)
		.sort((a, b) => a - b);
	const arrNums = nums.split(" ").map(Number);

	arrNums.forEach((num) => {
		const isM = findM(num, arrA);
		answer.push(isM ? 1 : 0);
	});
	return console.log(answer.join("\n"));
}

findNum(A, nums);
