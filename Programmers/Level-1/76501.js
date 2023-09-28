//Level 1 - 음양 더하기 풀이
function solution(absolutes, signs) {
	let sum = 0;
	for (i = 0; i < absolutes.length; i++) {
		//이 부분 삼항 연산자 쓰면 더 깔끔할듯
		//signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
		if (signs[i]) {
			sum += absolutes[i];
		} else {
			sum -= absolutes[i];
		}
	}
	return sum;
}

//다른 풀이 - reduce 사용하기
//for이 더 빠르다고 하지만 내부적으로 최적화가 이루어져있고 가독성과 유지보수성이 좋다는 장점이 있다.
function solution(absolutes, signs) {
	return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
