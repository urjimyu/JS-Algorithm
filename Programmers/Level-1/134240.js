//Level 1 - 푸드 파이트 대회 문제 풀이
function solution(food) {
	let answer = [];
	for (i = 1; i < food.length; i++) {
		if (food[i] === 1) {
			continue;
		} else if (food[i] % 2 === 0) {
			answer.push(i.toString().repeat(food[i] / 2));
		} else {
			answer.push(i.toString().repeat((food[i] - 1) / 2));
		}
	}

	answer = answer.join("") + "0" + answer.reverse().join("");
	return answer;
}

//다른 풀이 - for문 + floor 사용
function solution(food) {
	let res = "";
	for (let i = 1; i < food.length; i++) {
		res += String(i).repeat(Math.floor(food[i] / 2));
	}

	return res + "0" + [...res].reverse().join("");
}

//다른 풀이 - map 사용
function solution(food) {
	var answer = "";
	let arr = [];

	food.map((f, i) => {
		f = f % 2 == 0 ? f : f - 1;
		for (let j = 0; j < f / 2; j++) {
			arr.push(i);
		}
	});

	answer = arr.join("") + 0 + arr.reverse().join("");

	return answer;
}
