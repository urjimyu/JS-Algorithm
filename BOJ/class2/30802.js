const fs = require("fs");
const [n, sizeArr, inputs] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [t, p] = inputs.split(" ").map(Number);
const sizes = sizeArr.split(" ").map(Number);

function orderKits(n, sizes, t, p) {
	let answer = "";
	let tSum = 0;
	// 티셔츠 묶음 주문 개수 구하기
	sizes.forEach((nums) => (tSum += Math.ceil(nums / t)));
	answer = `${tSum}\n`;
	// 볼펜 주문 개수 구하기
	answer += `${Math.floor(n / p)} ${n % p}`;
	console.log(answer);
}

orderKits(n, sizes, t, p);
