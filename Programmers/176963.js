//Level 1 - 추억 점수 문제 풀이
//indexOf는 값을 찾지 못하면 -1을 반환한다!
function solution(name, yearning, photo) {
	let answer = [];
	let sum = 0;
	for (i = 0; i < photo.length; i++) {
		for (j = 0; j < photo[i].length; j++) {
			let score = name.indexOf(photo[i][j]);
			if (score === -1) {
				sum += 0;
			} else {
				sum += yearning[score];
			}
		}
		answer.push(sum);
		sum = 0;
	}
	return answer;
}

// 다른 풀이 - map, reduce, null 병합 연산자 활용
function solution(name, yearning, photo) {
	return photo.map((v) =>
		v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
	);
}

//다른 풀이 2
function solution(name, yearning, photo) {
	let obj = {};
	for (let i = 0; i < name.length; i++) {
		obj[name[i]] = yearning[i];
	}
	return photo.map((value) =>
		value.map((v) => (obj[v] ? obj[v] : 0)).reduce((acc, cur) => acc + cur, 0)
	);
}
