const fs = require("fs");
const [N, ...commands] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

function stackTop(stack, results) {
	if (stack.length === 0) return results.push(-1);
	const popNum = stack[stack.length - 1];
	return results.push(popNum);
}
function stackSize(stack, results) {
	return results.push(stack.length);
}
function popStack(stack, results) {
	if (stack.length === 0) return results.push(-1);
	const popNum = stack[stack.length - 1];
	stack.splice(-1, 1);
	return results.push(popNum);
}
function emptyStack(stack, results) {
	return results.push(stack.length === 0 ? 1 : 0);
}
function pushStack(stack, num) {
	stack[stack.length] = num;
	return stack;
}

function updateStack(N, commands) {
	const stack = [];
	const results = [];

	commands.forEach((command) => {
		switch (command) {
			case "top":
				stackTop(stack, results);
				break;

			case "size":
				stackSize(stack, results);
				break;

			case "pop":
				popStack(stack, results);
				break;

			case "empty":
				emptyStack(stack, results);
				break;

			default:
				command = command.split(" ");
				const pushNum = command[1];
				pushStack(stack, pushNum);
				break;
		}
	});
	return console.log(results.join("\n"));
}

updateStack(N, commands);
