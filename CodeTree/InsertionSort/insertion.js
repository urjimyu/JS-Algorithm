const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function insertionSort() {
	for (let i = 1; i < n; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if (arr[i] < arr[j]) arr.splice(j, 0, arr[i]);
			console.log("ARR", arr);
		}
	}
}

insertionSort();

console.log(arr.join(" "));
