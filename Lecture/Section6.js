function deleteAlphabets(str) {
	let stack = [];
	let flag = 0;
	for (x of str) {
		if (x === "(") flag += 1;
		else if (x === ")") flag -= 1;
		else if (!flag) {
			stack.push(x);
		}
	}
	return stack.join("");
}

function popGame(board, moves) {
	let answer = 0;
	let stack = [];
	for (let i = 0; i < moves.length; i++) {
		let target = board[moves[i] - 1];
		if (!target) continue;
		if (
			stack &&
			target &&
			stack[stack.length - 1] === target[target.length - 1]
		) {
			stack.pop();
			target.pop();
			answer += 2;
		} else stack.push(target.pop());
		console.log("ANSWER", answer);
	}
	return answer;
}

function cutPipe(str) {
	let answer = 0;
	let stack = [];

	for (x of str) {
		if (x === "(") stack.push("(");
		else {
			stack.pop();
		}
	}
}

function rescuePrincess(n, k) {
	let queue = [];
	for (i = 1; i <= n; i++) queue.push(i);
	while (queue.length > 1) {
		let count = 0;
		for (i = 1; i <= k; i++) {
			count += 1;
			if (count === k) {
				queue.shift();
				count = 0;
			} else {
				let x = queue.shift();
				queue.push(x);
			}
		}
	}
	let answer = queue.shift();
	return answer;
}

function curriculum(must, course) {
	let tmp = [];
	// 이게 훨씬 간단하다!
	// let must_arr = need.split("");
	let must_arr = Array.from({ length: must.length }, (v, i) => must[i]);
	for (x of course) {
		if (must_arr.includes(x)) tmp.push(x);
	}
	// 이렇게 비교하면 길이가 굉장히 길어졌을 때 시간이 오래 걸릴 수 있다. shift를 적극 사용하자!
	if (tmp.join("") === must) return "YES";
	else return "NO";
}
// let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(deleteAlphabets(str));
// let a = [
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 1, 0, 3],
// 	[0, 2, 5, 0, 1],
// 	[4, 2, 4, 4, 2],
// 	[3, 5, 1, 3, 1],
// ];

// let b = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log(popGame(a, b));
// let a = "()(((()())(())()))(())";
// console.log(cutPipe(a));
// console.log(rescuePrincess(8, 3));
let a = "CBA";
let b = "CBDAGE";
console.log(curriculum(a, b));
