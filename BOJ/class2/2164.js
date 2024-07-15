const fs = require("fs");
const cardNum = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim();
function findCard(cardNum) {
	const stack = [];
	for (let i = 1; i < +(cardNum + 1)/2; i++) stack.push(2*i);

	while (stack.length > 1) {
		stack.shift();
		const top = stack.shift();
		stack.push(top);
	}
	return console.log(...stack);
}

findCard(cardNum);
