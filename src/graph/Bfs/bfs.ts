export type Graph = {
  [key in number]: number[]
};

const visited = {};
const output: number[] = [];

const stack: number[] = [];

export function bfs(arr: Graph) {
  const currentVertex = 1;
  const vertexData = arr[currentVertex];
  visited[currentVertex] = true;
  console.log('vertex', currentVertex);
  output.push(Number(currentVertex));
  Array.prototype.push.apply(stack, vertexData);

  console.log('stack init', stack);

  while (stack.length > 0) {
    const vertex = stack.shift();

    if (typeof vertex === 'undefined') {
      break;
    }
    if (visited[vertex]) {
      continue;
    }
    console.log('vertex', vertex);
    visited[vertex] = true;
    output.push(Number(vertex));
    Array.prototype.push.apply(stack, arr[vertex]);
  }

  return output.join(', ');
}