function maxIncome(n, arr) {
	function DFS(idx, sum) {
		let answer = Number.MIN_SAFE_INTEGER;
		let count = 0;
		if (idx === n) return;
		if (count === n) {
			answer = Math.max(answer, sum);
		} else {
			DFS(idx + 1, sum);
			DFS(idx + 1, sum + arr[idx + 1]);
		}
	}
	DFS(0, 0);
}

// 다시 풀어보기
function election(str) {
	let n = str.length;
	let votes = Array.from({ length: n }, () => 0);
	for (let i = 0; i < n; i++) {
		if (str[i] === "A") votes[0] += 1;
		else if (str[i] === "B") votes[1] += 1;
		else if (str[i] === "C") votes[2] += 1;
		else if (str[i] === "D") votes[3] += 1;
		else if (str[i] === "E") votes[4] += 1;
	}
}

function anagram(str1, str2) {
	let Map1 = new Map();
	let Map2 = new Map();
	let answer = "NO";

	function counting(map, str) {
		for (x of str) {
			if (map.has(x)) map.set(x, map.get(x) + 1);
			else map.set(x, 1);
		}
	}
	counting(Map1, str1);
	counting(Map2, str2);
	for ([key, value] of Map1) {
		if (Map2.get(key) !== value || !Map2.has(key)) return (answer = "NO");
	}
	answer = "YES";

	return answer;
}

function allAnagram(str1, str2) {}

// let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(maxIncome(3, a));
// let str = "BACBACCACCBDEDE";
// console.log(election(str));
// let a = "abaCC";
// let b = "Caaab";
// console.log(anagram(a, b));
let a = "bacaAacba";
let b = "abc";
console.log(allAnagram(a, b));
