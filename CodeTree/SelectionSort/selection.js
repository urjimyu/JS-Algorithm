const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];
const arr = input[1].split(" ").map(Number);

function selectionSort() {
	for (let i = 0; i < arr.length - 1; i++) {
		let idx = i;
		let min = arr[idx];
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j];
				idx = j;
			}
		}
		[arr[idx], arr[i]] = [arr[i], arr[idx]];
	}
}

selectionSort();
console.log(arr.join(" "));
