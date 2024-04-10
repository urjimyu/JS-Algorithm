function d(n) {
	let sum = 0;
	let number = n;

	for (let i = 0; i < String(n).length; i++) {
		sum += number % 10;
		number = Math.floor(number / 10);
	}
	sum += n;
	return sum;
}

const max = 10000;
let selfNumbers = Array(max + 1).fill(true);

for (let i = 0; i <= max; i++) {
	selfNumbers[d(i)] = false;
}

for (let j = 1; j <= max; j++) {
	if (selfNumbers[j]) console.log(j);
}
