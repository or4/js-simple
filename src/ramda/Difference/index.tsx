import * as R from 'ramda';
import React from 'react';
import { objToString } from '../helpers/objToString';
import { difference } from './difference';

export class Difference extends React.PureComponent {
  public render() {
    return (
      <div>
        <h3>Difference</h3>
        <div>{`R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3) = ${objToString(R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]))}`}</div>
        <div>{`difference([1, 2, 3, 4], [7, 6, 5, 4, 3) = ${objToString(difference([1, 2, 3, 4], [7, 6, 5, 4, 3]))}`}</div>
      </div>
    );
  }
}
