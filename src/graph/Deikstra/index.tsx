import React from 'react';
import { deikstra } from './deikstra';

export class Deikstra extends React.PureComponent {
  public render() {
    const gr = {
      1: [{ vertex: 2, weight: 3 }, { vertex: 3, weight: 6 }],
      2: [{ vertex: 3, weight: 2 }, { vertex: 4, weight: 5 }],
      3: [{ vertex: 4, weight: 1 }],
      4: [{ vertex: 5, weight: 5 }],
      5: [{ vertex: 3, weight: 5 }]
    };

    const res = deikstra(gr);
    return (
      <div>
        <h3>Deikstra</h3>
        {res}
      </div>
    );
  }
}
