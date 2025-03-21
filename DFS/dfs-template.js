// 재귀 사용 (js는 비추..)
function dfs(graph, v, visited) {
  visited[v] = visited;
  console.log(v);

  graph[v].forEach((i) => {
    if (visited[i] === false) {
      dfs(graph, i, visited);
    }
  });
}

var graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 7, 8],
  [1, 7],
];

var visited = [];

for (var i = 0; i < graph.length; i++) {
  visited.push(false);
}

dfs(graph, 1, visited);

// 스택 사용 - 추천
function dfs(graph, visited) {
  const stack = [[0, -1]];

  while (stack.length) {
    let [cur, parent] = stack.pop();

    if (visited[cur]) {
      // 이 부분이 기존의 Iterative DFS에서 빠져 있던 부분이고
      // Recursive DFS와 같게 만들어 주는데 필요한 로직이다.
      // 여기에 parentnode 관련된 연산 들어감
      continue;
    }

    stack.push([cur, parent]);
    visited[cur] = true;
    console.log(cur);

    for (const node of graph[cur]) {
      if (!visited[node]) stack.push([node, cur]);
    }
  }
}
