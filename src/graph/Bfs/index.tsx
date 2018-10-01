import React from 'react';
import { bfs } from './bfs';

export class Bfs extends React.PureComponent {
  public render() {
    const gr = {
      1: [2, 3],
      2: [3, 4],
      3: [4],
      4: [5],
      5: [3]
    };

    const res = bfs(gr);
    return (
      <div>
        <h3>Bfs</h3>
        {res}
      </div>
    );
  }
}
