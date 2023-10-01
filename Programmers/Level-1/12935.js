//Level 1 - 제일 작은 수  제거하기 문제 풀이
function solution(arr) {
	//answer 새로 선언할 필요 없이 arr 쓰면 됨!
	let answer = arr;
	answer.splice(answer.indexOf(Math.min(...answer)), 1);
	//!answer 또는 answer === false로 조건 걸면 제대로 작동 안 함
	if (answer.length === 0) {
		return [-1];
	}
	return answer;
}

//다른 풀이 1 - filter 사용
function solution(arr) {
	const min = Math.min(...arr);
	return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}
