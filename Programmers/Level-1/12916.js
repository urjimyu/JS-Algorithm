//Level 1 - 문자열 내 p와 y의 개수 문제 풀이
function solution(s) {
	let p = 0;
	let y = 0;
	for (i = 0; i < s.length; i++) {
		if (s[i] === "p" || s[i] === "P") {
			p += 1;
		}
		if (s[i] === "y" || s[i] === "Y") {
			y += 1;
		}
	}
	if (y === p) {
		return true;
	} else return false;
}

//다른 풀이 1
function numPY(s) {
	return (
		s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
	);
}

//다른 풀이 2 - reduce 사용한 풀이
function solution(s) {
	return [...s.toLowerCase()].reduce((acc, cur) => {
		if (cur === "p") return acc + 1;
		else if (cur === "y") return acc - 1;
		return acc;
	}, 0)
		? false
		: true;
}
