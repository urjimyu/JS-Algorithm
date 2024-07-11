const fs = require("fs");
const [N, ...numbers] = fs
	.readFileSync("dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => Number(line));

function sortNums(numbers) {
	numbers.sort((a, b) => a - b);
	return console.log(numbers.join("\n"));
}

sortNums(numbers);
