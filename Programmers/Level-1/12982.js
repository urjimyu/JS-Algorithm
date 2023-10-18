//Level 1 - 예산
function solution(d, budget) {
	let sorted = d.sort((a, b) => a - b);
	let sum = 0;
	for (i = 0; i < d.length; i++) {
		sum += d[i];
		if (sum > budget) {
			return i;
		}
	}
	return i;
}

//다른 풀이 - reduce 활용. 효율은 떨어지니 참고용.
function solution(d, budget) {
	return d
		.sort((a, b) => a - b)
		.reduce((count, price) => {
			return count + ((budget -= price) >= 0);
		}, 0);
}
