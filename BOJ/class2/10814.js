const fs = require("fs");
const [_, ...members] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

function sortMembers(members) {
	const answer = members
		.map((line) => line.split(" "))
		.sort((a, b) => +a[0] - +b[0])
		.map((line) => [...line].join(" "));
	return console.log([...answer].join("\n"));
}

sortMembers(members);
