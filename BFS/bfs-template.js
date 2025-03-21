class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front === null) {
      this.front = this.rear = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    if (this.head === null) return null;
    let nowNode = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return nowNode.value;
  }
}

function bfs(graph, start, visited) {
  const queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;
  while (queue.size > 0) {
    var v = queue.dequeue();
    console.log(v);
    graph[v].forEach((i) => {
      if (visited[i] === false) {
        queue.enqueue(i);
        visited[i] = true;
      }
    });
  }
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

bfs(graph, 1, visited);
