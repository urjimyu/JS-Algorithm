const fs = require("fs");
const [num1, num2] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function maxCom(num1, num2) {
	const coms = [];

	for (let i = 1; i <= num1; i++) {
		if (num1 % i === 0) coms.push(i);
	}

	const commonComs = coms.filter((com) => num2 % com === 0);
	return console.log(Math.max(...commonComs));
}

function minCom(num1, num2) {
	for (let i = num2; i <= num1 * num2; i++) {
		if (i % num1 === 0 && i % num2 === 0) return console.log(i);
	}
}

function findValue(num1, num2) {
	let smallNum = Math.min(+num1, +num2);
	let bigNum = Math.max(+num1, +num2);
	maxCom(smallNum, bigNum);
	minCom(smallNum, bigNum);
	return;
}

findValue(num1, num2);
