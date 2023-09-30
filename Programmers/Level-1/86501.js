//Level 1 - 없는 숫자 더하기 문제 풀이
function solution(numbers) {
	let answer = 0;
	for (i = 0; i < 10; i++) {
		numbers.includes(i) ? {} : (answer += i);
	}
	return answer;
}

//다른 풀이 - reduce 사용
//includes는 인덱스 0부터 여러 번 찾으므로 숫자가 커지면 이 풀이가 더 나을 수 있다.
function solution(numbers) {
	return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
