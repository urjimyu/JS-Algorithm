function findAnimal(start, dst) {
	let answer = 0;
	let check = Array.from({ length: 10001 }, () => 0);
	let queue = [];
	queue.push(start);
	let L = 0;
	while (queue.length) {
		let len = queue.length;
		for (i = 0; i < len; i++) {
			let x = queue.shift();
			for (let nx of [x - 1, x + 1, x + 5]) {
				if (nx === dst) return L + 1;
				if (nx > 0 && nx <= 10000 && check[nx] === 0) {
					check[nx] = 1;
					queue.push(nx);
				}
			}
		}
		L++;
	}
	return answer;
}

let arr = [
	[1, 1, 0, 0, 0, 1, 0],
	[0, 1, 1, 0, 1, 1, 0],
	[0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 1, 0, 0],
	[1, 0, 1, 0, 1, 0, 0],
];

console.log(countIslands(arr));
