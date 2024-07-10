const fs = require("fs");
const [N, ...commands] = fs
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class2/test.txt")
	.toString()
	.trim()
	.split("\n");

function stackTop(stack) {
	if (stack.length === 0) return console.log(-1);
	const popNum = stack[stack.length - 1];
	return console.log(popNum);
}
function stackSize(stack) {
	return console.log(stack.length);
}
function popStack(stack) {
	if (stack.length === 0) return console.log(-1);
	const popNum = stack[stack.length - 1];
	stack.splice(-1, 1);
	return console.log(popNum);
}
function emptyStack(stack) {
	return console.log(stack.length === 0 ? 1 : 0);
}
function pushStack(stack, num) {
	stack[stack.length] = num;
	return stack;
}

function updateStack(N, commands) {
	const stack = [];

	commands.forEach((command) => {
		switch (command) {
			case "top":
				stackTop(stack);
				break;

			case "size":
				stackSize(stack);
				break;

			case "pop":
				popStack(stack);
				break;

			case "empty":
				emptyStack(stack);
				break;

			default:
				command = command.split(" ");
				const pushNum = command[1];
				pushStack(stack, pushNum);
				break;
		}
	});
	return;
}

updateStack(N, commands);
