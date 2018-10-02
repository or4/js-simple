import * as R from 'ramda';

export type GraphItem = {
  vertex: number;
  weight: number;
};

export type Graph = {
  [key in number]: GraphItem[]
};

const weights = {};
const done = {};
const stack: GraphItem[] = [];

function deikstraR(arr: Graph) {
  stack.sort((itemA: GraphItem, itemB: GraphItem) => itemA.weight - itemB.weight);
  const graphItem = stack.shift();
  if (typeof graphItem === 'undefined') {
    return;
  }

  console.log('graphItem', graphItem);

  if (done[graphItem.vertex]) {
    return;
  }
  done[graphItem.vertex] = true;

  for (const vertex of arr[graphItem.vertex]) {
    if (typeof weights[vertex.vertex] === 'undefined' || weights[vertex.vertex] > (weights[graphItem.vertex] + vertex.weight)) {
      weights[vertex.vertex] = (weights[graphItem.vertex] + vertex.weight);
    }
  }

  Array.prototype.push.apply(stack, arr[graphItem.vertex]);
}


export function deikstra(arr: Graph) {
  stack.length = 0;

  const currentVertext = 1;
  const vertices = arr[currentVertext];

  weights[currentVertext] = 0;
  done[currentVertext] = true;

  for (const vertex of vertices) {
    if (typeof weights[vertex.vertex] === 'undefined' || weights[vertex.vertex] > vertex.weight) {
      weights[vertex.vertex] = vertex.weight;
    }
  }

  Array.prototype.push.apply(stack, vertices);

  while (stack.length > 0) {
    deikstraR(arr);
  }

  console.log('weights', weights);
  console.log('stack', stack);
  console.log('done', done);

  return R.pipe(
    R.toPairs,
    R.map((item: any) => item.join('-')),
    R.join(', ')
  )(weights);


  // Object.values(weights).join(', ');
}