import * as R from 'ramda';
import React from 'react';
import { objToString } from '../helpers/objToString';
import { path } from './path';

export class Path extends React.PureComponent {
  public render() {
    return (
      <div>
        <h3>Path</h3>
        <div>{`R.path(['a', 'b'], { a: { b: 12 }}) = ${objToString(R.path(['a', 'b'], { a: { b: 12 }}))}`}</div>
        <div>{`path(['a', 'b'], { a: { b: 12 }}) = ${objToString(path(['a', 'b'], { a: { b: 12 }}))}`}</div>
        <div>{`path(['a', 'b', 'c'], { a: { b: 12 }}) = ${objToString(path(['a', 'b', 'c'], { a: { b: 12 }}))}`}</div>
        <div>{`path(['a', 'b', 'c'], { a: { b: 12 }}) = ${objToString(path(['a', 'b', 'c'], { a: { b: 12 }}))}`}</div>
        <div>{`path(['d', 'e'], { a: { b: 12 }}) = ${objToString(path(['d', 'e'], { a: { b: 12 }}))}`}</div>
        <div>{`path(['a', 'b'], { a: { b: { f: 'test' }}}) = ${objToString(path(['a', 'b'], { a: { b: { f: 'test' }}}))}`}</div>
        <div>{`() => '123' = ${objToString(() => '123')}`}</div>
        <div>{`String(() => '123') = ${String(() => '123')}`}</div>
        <div>{`typeof () => '123' = ${typeof (() => '123')}`}</div>
      </div>
    );
  }
}
