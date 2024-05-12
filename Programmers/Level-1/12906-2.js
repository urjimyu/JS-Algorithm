function solution(arr) {
	let answer = [];
	for (let i = 0; i < arr.length; i++) {
    // 스택에 들어있는 마지막 수와 다를 때만 스택에 추가
		if (answer[answer.length - 1] === arr[i]) continue;
		else answer.push(arr[i]);
	}
	return answer;
}
