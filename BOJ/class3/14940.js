const [input, ...info] = require("fs")
	.readFileSync("/Users/jimyu/JS-Algorithm/BOJ/class3/test.txt")
	// .readFileSync("dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [n, m] = input.split(" ").map(Number);
const mapArr = info.map((row) => row.split(" ").map(Number));

// 좌우상하
const dy = [0, 0, 1, -1];
const dx = [-1, 1, 0, 0];

// 숫자 2 위치 찾기
const findTarget = () => {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (mapArr[i][j] === 2) return [i, j];
		}
	}
};

//목표지점부터 거리 세기
const bfs = (start) => {
	const queue = [start]; // 목표 지점 큐에 추가 [i,j]
	const dist = Array.from({ length: n }, () => new Array(m).fill(-1)); // 거리 저장용 배열, -1로 초기화

	// 시작 지점 저장
	const [startX, startY] = start;
	dist[startX][startY] = 0; // 시작 지점 0으로 처리.

	while (queue.length) {
		const [x, y] = queue.shift(); //큐 맨 앞에 있는 좌표 꺼내기

		for (let i = 0; i < 4; i++) {
			//사방으로 이동하면서 거리 세기
			const nx = x + dx[i];
			const ny = y + dy[i];

			if (
				nx >= 0 &&
				nx < n &&
				ny >= 0 &&
				ny < m && // 범위 안에 있고
				mapArr[nx][ny] !== 0 && // 지도상 갈 수 없는 길이 아니면서
				dist[nx][ny] === -1 // 아직 거리 계산을 하지 않은 점인 경우
			) {
				queue.push([nx, ny]); // 큐에 사방으로 이동한 미계산 노드 큐에 추가
				dist[nx][ny] = dist[x][y] + 1; // 거리는 시작 지점에서 1 추가, 방문 처리됨
			}
		}
	}
	return dist; // 큐에 있는 노드가 없으면 거리 반환
};

const target = findTarget();
const distances = bfs(target);

//백준에서 제출하기 위한 출력 형태 맞춰주기 위함
for (let i = 0; i < n; i++) {
	let line = "";
	for (let j = 0; j < m; j++) {
		if (mapArr[i][j] === 0) {
			line += "0 ";
		} else {
			line += `${distances[i][j]} `;
		}
	}
	console.log(line.trim());
}
