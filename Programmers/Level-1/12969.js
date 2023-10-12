//Level 1 - 직사각형 별찍기
//표준 입출력
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
	const n = data.split(" ");
	const a = Number(n[0]),
		b = Number(n[1]);

	for (i = 0; i < b; i++) {
		for (j = 0; j < a; j++) {
			//console.log는 개행이 자동으로 추가된다.
			process.stdout.write("*");
		}
		process.stdout.write("\n");
	}
});

//다른 풀이 - repeat 활용
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
	const n = data.split(" ");
	const a = Number(n[0]),
		b = Number(n[1]);
	const row = "*".repeat(a);
	for (let i = 0; i < b; i++) {
		console.log(row);
	}
});
