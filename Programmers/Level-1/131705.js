//Level 1 - 삼총사 문제 풀이
function solution(number) {
	let count = 0;

	for (i = 0; i < number.length - 2; i++) {
		for (j = i + 1; j < number.length - 1; j++) {
			for (z = j + 1; z < number.length; z++) {
				if (number[i] + number[z] + number[j] === 0) {
					count += 1;
				}
			}
		}
	}
	return count;
}

//다른 풀이 - reduce 사용
function solution(number) {
	let result = 0;

	const combination = (current, start) => {
		if (current.length === 3) {
			result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
			return;
		}

		for (let i = start; i < number.length; i++) {
			combination([...current, number[i]], i + 1);
		}
	};
	combination([], 0);
	return result;
}
