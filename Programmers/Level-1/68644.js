//Level 1 - 두 개 뽑아서 더하기 문제 풀이
function solution(numbers) {
	var answer = [];
	for (i = 0; i < numbers.length; i++) {
		for (j = i + 1; j < numbers.length; j++) {
			let sumNumber = numbers[i] + numbers[j];
			if (answer.includes(sumNumber)) {
				continue;
			}
			answer.push(sumNumber);
		}
	}
	return answer.sort((a, b) => a - b);
}

//다른 풀이 - Set 활용
function solution(numbers) {
	const temp = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			temp.push(numbers[i] + numbers[j]);
		}
	}

	const answer = [...new Set(temp)];

	return answer.sort((a, b) => a - b);
}
