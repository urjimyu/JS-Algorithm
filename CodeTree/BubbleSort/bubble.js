const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];
let arr = input[1].split(" ").map(Number);

function bubbleSort() {
	let sorted = false;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				sorted = false;
			}
		}
	}
}

bubbleSort();

console.log(arr.join(" "));
