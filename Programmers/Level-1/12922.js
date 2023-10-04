//Level 1 - 수박수박수박수박수박수? 문제 풀이
function solution(n) {
	return n % 2 ? "수박".repeat((n - 1) / 2) + "수" : "수박".repeat(n / 2);
}

//다른 풀이 1 - 내 풀이와 비슷한 풀이
var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");

//다른 풀이들 - substring, slice 등 사용
const waterMelon = (n) => "수박".repeat(n).slice(0, n);
