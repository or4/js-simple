import * as R from 'ramda';

function reducer(acc: any[], current: any) {
  if (Array.isArray(current)) {
    acc.push.apply(acc, flatten(current));
    return acc;
  }
  acc.push(current);
  return acc;
}

export function flatten(arr: any[]): any {
  if (R.isNil(arr) || R.equals(arr.length, 0)) {
    return arr;
  }
  return arr.reduce(reducer, []);
}