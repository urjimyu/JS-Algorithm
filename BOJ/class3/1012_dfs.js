// 방법 1 - DFS
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ans.txt";
let [testCase, ...inputs] = require("fs")
	.readFileSync(filePath)
	.toString()
	.trim()
	.split("\n");

let graph,
	visited,
	M,
	N,
	K,
	cnt,
	p = 0;

for (let i = 0; i < inputs.length; i++)
	inputs[i] = inputs[i].split(" ").map((e) => +e);

// 테케가 여러 개 들어오므로 처리해주기
for (let i = 0; i < testCase; i++) {
	[M, N, K] = inputs[p];
	// 밭 만들어주기
	(graph = Array.from(new Array(M), () => new Array(N).fill(0))),
		// 방문 여부 저장할 배열 만들어주기
		(visited = Array.from(new Array(M), () => new Array(N).fill(0)));
	// 필요한 벌레 수 카운트 할 변수 초기화
	cnt = 0;

	// 이번 테케의 시작 인덱스 저장
	let temp = p;
	// 이번 회차 테케만 돌기
	for (p = p + 1; p <= K + temp; p++) {
		// 배추 있는 곳 배열에 표시
		let [x, y] = inputs[p];
		graph[x][y] = 1;
	}
	for (let j = 0; j < M; j++) {
		for (let k = 0; k < N; k++) {
			// 배추 있는 곳은 전부 DFS로 인접한 경우 세어보기
			if (graph[j][k] == 1 && visited[j][k] == 0) {
				DFS(j, k);
				cnt++;
			}
		}
	}
	console.log(cnt);
}

function DFS(x, y) {
	// 상하좌우 비교
	let dx = [0, 1, 0, -1],
		dy = [1, 0, -1, 0];
	visited[x][y] = 1;
	for (let i = 0; i < 4; i++) {
		let ax = x + dx[i],
			ay = y + dy[i];
		// 인접한 위치에 배추가 있으면 visited 처리해주기
		if (ax >= 0 && ay >= 0 && ax < M && ay < N) {
			// 방문하지 않은 인접 배추가 있다면 DFS 진행
			if (visited[ax][ay] == 0 && graph[ax][ay] == 1) {
				DFS(ax, ay);
			}
		}
	}
}
