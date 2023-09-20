//Level 1 - 정수 내림차순으로 배치하기 풀이

//다른 풀이 - 숫자 풀이
function solution(n) {
	//숫자가 분명히 더 빠름
	var nums = [];
	do {
		nums.push(n % 10);
		n = Math.floor(n / 10);
	} while (n > 0);

	return nums.sort((a, b) => b - a).join("") * 1;
	//문자는 느림
	return (
		(n + "")
			.split("")
			.sort((a, b) => b - a)
			.join("") * 1
	);
}

//다른 풀이 2 - 문자 풀이

function solution(n) {
	const newN = n + "";
	const newArr = newN.split("").sort().reverse().join("");

	return +newArr;
}