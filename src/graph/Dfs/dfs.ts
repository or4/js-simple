export type Graph = {
  [key in number]: number[]
};

const visited = {};
const output: number[] = [];

function dfsRecursive(arr: Graph, currentVertex: number) {
  if (visited[currentVertex]) {
    return;
  }
  output.push(currentVertex);

  visited[currentVertex] = true;

  const vertices = arr[currentVertex];
  for (const vertex of vertices) {
    dfsRecursive(arr, vertex);
  }
}

export function dfs(arr: Graph) {
  const currentVertex = 1;
  dfsRecursive(arr, currentVertex);
  return output.join(', ');
}