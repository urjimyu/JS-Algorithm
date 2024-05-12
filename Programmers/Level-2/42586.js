function solution(progresses, speeds) {
	let days = [];
	let counts = [];
	let answer = [];

	// 개발 완료까지 걸리는 기간 계산
	for (let i = 0; i < progresses.length; i++) {
		let day = Math.ceil((100 - progresses[i]) / speeds[i]);
		days.push(day);
	}

	for (let j = 0; j < days.length; j++) {
		if (counts.length === 0) counts.push(days[j]);
		else if (days[j] <= counts[0]) counts.push(days[j]);
		else {
			answer.push(counts.length);
			counts = [];
			counts.push(days[j]);
		}
	}

	// 마지막에 남은 작업도 추가해주기!!
	if (counts.length > 0) answer.push(counts.length);

	return answer;
}
