function solution(n, edge) {
// BFS 풀이법 - 정답 풀이
// 노드 개수 크기의 2차 배열 선언
  const connects = new Array(n).fill().map((_) => []);
// 각 노드가 연결된 노드 정보를 저장해줌
  for (const e of edge) {
		connects[e[0] - 1].push(e[1] - 1);
		connects[e[1] - 1].push(e[0] - 1);
	}

  // depth이자 개수
	const visited = [1];
	const queue = [0];

	while (queue.length) {
		const cur = queue.shift();

    // 연결된 간선 순회
		for (const next of connects[cur]) {
      // 방문하지 않은 노드면 방문 처리하고 depth+1에 값 삽입
			if (!visited[next]) {
				visited[next] = visited[cur] + 1;
				queue.push(next);
			}
		}
	}

  // 가장 먼 노드 찾기
	const max = Math.max(...visited);

	return visited.filter((el) => el === max).length;
}
