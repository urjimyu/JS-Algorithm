const fs = require("fs");
const [N, ...words] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

function compareFn(a, b) {
	if (a.length === b.length) return a.localeCompare(b);
	return a.length - b.length;
}

function sortWords(words) {
	const setWords = new Set(words);
	const arr = [...setWords];
	arr.sort((a, b) => compareFn(a, b));
	return console.log(arr.join("\n"));
}

sortWords(words);
