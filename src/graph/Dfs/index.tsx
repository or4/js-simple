import React from 'react';
import { dfs } from './dfs';

export class Dfs extends React.PureComponent {
  public render() {
    const gr = {
      1: [2, 3],
      2: [3, 4],
      3: [4],
      4: [5],
      5: [3]
    };

    const res = dfs(gr);
    return (
      <div>
        <h3>Dfs</h3>
        {res}
      </div>
    );
  }
}
