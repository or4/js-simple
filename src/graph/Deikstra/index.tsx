import React from 'react';
import { deikstra } from './deikstra';

export class Deikstra extends React.PureComponent {
  public render() {
    // от вершины 1 до 2-й составляет 7, до 3-й — 9, до 4-й — 20, до 5-й — 20, до 6-й — 11.
    const gr = {
      1: [{ vertex: 2, weight: 7 }, { vertex: 3, weight: 9 }, { vertex: 6, weight: 14 }],
      2: [{ vertex: 1, weight: 7 }, { vertex: 3, weight: 10 }, { vertex: 4, weight: 15 }],
      3: [{ vertex: 1, weight: 9 }, { vertex: 2, weight: 10 }, { vertex: 4, weight: 11 }, { vertex: 6, weight: 2 }],
      4: [{ vertex: 2, weight: 15 }, { vertex: 3, weight: 11 }, { vertex: 5, weight: 6 }],
      5: [{ vertex: 4, weight: 6 }, { vertex: 6, weight: 9 }],
      6: [{ vertex: 1, weight: 14 }, { vertex: 3, weight: 2 }, { vertex: 5, weight: 9 }],
    };
    // const gr = {
    //   1: [{ vertex: 2, weight: 3 }, { vertex: 3, weight: 6 }],
    //   2: [{ vertex: 3, weight: 2 }, { vertex: 4, weight: 5 }],
    //   3: [{ vertex: 4, weight: 1 }],
    //   4: [{ vertex: 5, weight: 5 }],
    //   5: [{ vertex: 3, weight: 5 }]
    // };

    const res = deikstra(gr);
    return (
      <div>
        <h3>Deikstra</h3>
        {res}
      </div>
    );
  }
}
