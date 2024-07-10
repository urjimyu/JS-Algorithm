const fs = require("fs");
const [T, ...tests] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

function checkVPS(test, stack) {
	for (let i = 0; i < test.length; i++) {
		if (test[i] === "(") stack.push("(");
		else if (test[i] === ")") {
			if (stack.length === 0) return false;
			stack.pop();
		}
	}
	return stack.length === 0;
}

function isVPS(T, tests) {
	tests.forEach((test) => {
		const stack = [];
		const isVPS = checkVPS(test, stack);
		console.log(isVPS ? "YES" : "NO");
	});
	return;
}

isVPS(T, tests);
