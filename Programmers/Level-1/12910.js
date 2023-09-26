//Level 1 - 나누어 떨어지는 숫자 배열 풀이
function solution(arr, divisor) {
	//find는 첫 번째 요소만 반환, filter는 배열 반환
	var answer = arr.filter((num) => num % divisor === 0);
	if (!answer.length) {
		return [-1];
	}
	//sort는 문자열로 바꿔서 비교하므로 유의하기
	var sorted = answer.sort((a, b) => a - b);
	return sorted;
}

//더 깔끔한 풀이 - 삼항연산자 사용
function solution(arr, divisor) {
	var answer = arr.filter((v) => v % divisor == 0);
	return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
