const fs = require("fs");
const [N, A, M, nums] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

function findM(num, arr) {
	let tmpArr = [...arr];
	let isNum = false;
	let i = 1;
	while (!isNum && i <= Math.ceil(Math.sqrt(arr.length))) {
		let centerIdx = Math.ceil(tmpArr.length / 2) - 1;
		let centerValue = tmpArr[centerIdx];
		if (num === centerValue) isNum = true;
		if (centerValue < num) tmpArr.splice(0, centerIdx + 1);
		if (centerValue > num) tmpArr.splice(centerIdx + 1);
		i++;
	}
	return isNum;
}

function findNum(A, nums) {
	const answer = [];
	const arrA = A.split(" ");
	arrA.sort((a, b) => a - b);
	const arrNums = nums.split(" ");

	arrNums.forEach((num) => {
		const isM = findM(num, arrA);
		answer.push(isM ? 1 : 0);
	});
	return console.log(answer.join("\n"));
}

findNum(A, nums);
