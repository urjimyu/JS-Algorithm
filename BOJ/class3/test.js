const [n, map] = require("fs")
	.readFileSync("./dev/stdin")
	.toString()
	.trim()
	.split("\n");

const maps = map.split("").map(Number);

const countFn = () => {
	const visited = Array.from({ length: n }, () => Array(n).fill(0));
	const stack = [];

	// 상하좌우
	const DX = [0, 0, -1, 1];
	const DY = [1, -1, 0, 0];

  const dfs =(x,y) => {
    const tmp = stack.pop();
    while(stack.length > 0 && )
    for(let i=0; i < 4; i++){
      if ()
    }
  }

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (visited[i][j] == 1) continue;
			visited[i][j] = 1;
			if (maps[i][j] == 1) stack.push([i, j]);
		}
	}
};
