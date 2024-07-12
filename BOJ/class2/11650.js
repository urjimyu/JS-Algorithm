const fs = require("fs");
const [N, ...inputs] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

function compareFn(a, b) {
	if (+a[0] === +b[0]) return +a[1] - +b[1];
	return +a[0] - +b[0];
}

function sortSpots(spots) {
	const answer = [];
	const sortedSpots = spots
		.map((spot) => spot.split(" "))
		.sort((a, b) => compareFn(a, b));
	sortedSpots.forEach((line) => answer.push(line.join(" ")));
	return console.log(answer.join("\n"));
}

sortSpots(inputs);
