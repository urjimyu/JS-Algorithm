//Level 1 - 이상한 문자 만들기
function solution(s) {
	let new_array = s.split(" ");
	let word = [];
	let answer = [];
	for (i = 0; i < new_array.length; i++) {
		for (j = 0; j < new_array[i].length; j++) {
			if (j % 2 === 0) {
				word.push(new_array[i][j].toUpperCase());
			} else {
				word.push(new_array[i][j].toLowerCase());
			}
		}
		answer.push(word.join(""));
		word = [];
	}
	return answer.join(" ");
}

//다른 풀이 1 - map 사용
function toWeirdCase(s) {
	return s
		.split(" ")
		.map((i) =>
			i
				.split("")
				.map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()))
				.join("")
		)
		.join(" ");
}

//다른 풀이 2 - 정규식 사용
function toWeirdCase(s) {
	function changeCase(input) {
		return a[0].toUpperCase() + a[1].toLowerCase();
	}

	return s.toUpperCase().replace(/(\w)(\w)/g, changeCase(s));
}
