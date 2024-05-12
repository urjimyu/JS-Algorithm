function solution(priorities, location) {
	var answer = 0;
	let idx = [];
  // 인덱스로 목표 프로세스 실행여부 판단
	priorities.forEach((i, index) => idx.push(index));

	let tmp = -1;
	while (tmp !== location) {
		let max = Math.max(...priorities);

		if (priorities[0] !== max) {
			priorities.push(priorities[0]);
			priorities.shift();
			idx.push(idx[0]);
			idx.shift();
		} else {
			priorities.shift();
			tmp = idx.shift();
			answer += 1;
		}
	}

	return answer;
}
