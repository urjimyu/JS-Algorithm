function recursive(n) {
	if (n <= 0) {
		return;
	}
	recursive(n - 1);
	console.log(n);
}

function subsets(n) {
	let subset = [];
	for (let i = 0; i < n; i++) {}

	return answer;
}

function dividedSum(n, arr) {
	let half_sum = arr.reduce((a, b) => a + b, 0) / 2;
	let subset = Array.from({ length: n }, () => 0);
	function DFS(v) {
		if (v === n + 1) {
			let sum = 0;
			for (x of subset) {
				if (x === 1) {
					sum += arr[x];
				}
			}
			return sum === half_sum ? "YES" : "NO";
		} else {
			DFS(n + 1);

			DFS(n + 1);
		}
	}
	DFS(0);
}

function carryDogs(weight, amount) {
	let answer = Number.MIN_SAFE_INTEGER;

	function DFS(v, sum) {
		if (sum > weight) return;
		if (v === amount.length) {
			answer = Math.max(answer, sum);
			return;
		} else {
			DFS(v + 1, sum + amount[v]);
			DFS(v + 1, sum);
		}
	}
	DFS(0, 0);
	return answer;
}

function maxScore(n, m, scores, times) {
	let max = Number.MIN_SAFE_INTEGER;
	function DFS(idx, score, total_time) {
		if (total_time > m) return;
		if (idx === n) {
			max = Math.max(max, score);
			return;
		} else {
			DFS(idx + 1, score + scores[idx], total_time + times[idx]);
			DFS(idx + 1, score, total_time);
		}
	}
	DFS(0, 0, 0);
	return max;
}

// function 중복순열(n, m) {
// 	let answer = [];
// 	let cases = [];
// 	function DFS(num) {
// 		if (cases.length === m) answer.push(cases.join(" "));
// 		if (num > n) return;
// 		else {
// 			cases.push(num);
// 			DFS(num + 1);
// 		}
// 	}

// 	DFS(1);
// 	return answer.join(" ");
// }

function 중복순열(n, m) {
	function DFS(v, round) {}
}

function solution(n, m) {
	let answer = [];
	let tmp = Array.from({ length: m }, () => 0);
	function DFS(L) {
		if (L === m) {
			answer.push(tmp.slice());
		} else {
			for (let i = 1; i <= n; i++) {
				console.log("TMP", tmp);
				console.log("L", L);
				tmp[L] = i;
				DFS(L + 1);
			}
		}
	}

	DFS(0);
	return answer;
}

function changes(pay, arr) {
	let coins = arr.sort((a, b) => b - a);
	let count = 0;
	function calc(idx, rest) {
		let coin = coins[idx];
		if (rest === 0) return;
		else {
			count += Math.floor(rest / coin);
			rest = rest % coin;
			calc(idx + 1, rest);
		}
	}
	calc(0, pay);
	return count;
}

function 순열구하기(amount, arr) {
	let answer = [];
	let leftover = [...arr];
	let tmp = [];
	function DFS(level) {
		if (level === amount) {
			answer.push(tmp.slice());
			return;
		} else {
			for (let i = 0; i < leftover.length; i++) {
				tmp[level] = leftover[i];
				leftover.splice(i, 1);
				DFS(level + 1);
			}
		}
	}
	DFS(0);
	return answer.join("\n");
}

function factorial(n) {
	let answer = 1;
	function calc(level) {
		if (level === 0) return;
		else {
			answer *= level;
			calc(level - 1);
		}
	}

	calc(n);
	return answer;
}

function combination(n, r) {
	function DFS(a, b) {}
}
// console.log(recursive(3));
// console.log(subsets(3));
// let arr = [1, 3, 5, 6, 7, 10];
// console.log(dividedSum(6, arr));
// let arr = [81, 58, 42, 33, 61];
// console.log(carryDogs(259, arr));
// let ps = [10, 25, 15, 6, 7];
// let pt = [5, 12, 8, 3, 4];
// console.log(maxScore(5, 20, ps, pt));
// console.log(solution(3, 2));
// console.log(중복순열(3, 2));
// let arr = [1, 2, 5];
// console.log(changes(15, arr));
let arr = [3, 6, 9];
console.log(순열구하기(2, arr));
// console.log(factorial(5));
// console.log(combination(5, 3));
