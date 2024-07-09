const fs = require("fs");
const [N, inputs] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = inputs.split(" ");

function findDecimal(N, numbers) {
	let count = 0;
	numbers.forEach((num) => {
		for (let i = 1; i < num; i++) {
			if (i !== 1 && num % i === 0) {
				break;
			} else if (i === num - 1) count += 1;
		}
	});
	return console.log(count);
}

findDecimal(N, numbers);
