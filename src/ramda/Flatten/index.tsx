import * as R from 'ramda';
import React from 'react';
import { objToString } from '../helpers/objToString';
import { flatten } from './flatten';

export class Flatten extends React.PureComponent {
  public render() {
    return (
      <div>
        <h3>Flatten</h3>
        <div>{`R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]) = ${objToString(R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]))}`}</div>
        <div>{`flatten([1, 2]) = ${objToString(flatten([1, 2]))}`}</div>
        <div>{`flatten([1, 2, [3, 4]]) = ${objToString(flatten([1, 2, [3, 4]]))}`}</div>
        <div>{`flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]) = ${objToString(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]))}`}</div>
      </div>
    );
  }
}

/*

<div>{` = ${objToString()}`}</div>
<div>{` = ${objToString()}`}</div>
<div>{` = ${objToString()}`}</div>
<div>{` = ${objToString()}`}</div> */