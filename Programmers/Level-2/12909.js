function solution(s) {
	let total = 0;
	var answer = true;
	let sArray = Array.from(s);
	//  (면 +1점, )면 -1점, 전부 계산해서 0점이 아니면 false 반환하기
	for (i = 0; i < sArray.length; i++) {
		if (total === -1) {
			return false;
		} else if (sArray[i] === "(") {
			total += 1;
		} else {
			total -= 1;
		}
	}
	answer = total === 0;
	return answer;
}
