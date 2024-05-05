function solution(clothes) {
	let sets = {};
	for (let i = 0; i < clothes.length; i++) {
		if (sets[clothes[i][1]]) sets[clothes[i][1]] += 1;
		else sets[clothes[i][1]] = 1;
	}
	let values = Object.values(sets);
	values = values.map((val) => val + 1);
	let answer = 1;
	for (let j = 0; j < values.length; j++) {
		answer *= values[j];
	}
	return answer - 1;
}
