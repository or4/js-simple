import * as R from 'ramda';

function reducer(acc: any[], current: any) {
  acc.push.apply(acc, flatten(current));
  return acc;
  // return acc.concat(flatten(current));
}

export function flatten(obj: any): any[] {
  if (!Array.isArray(obj)) {
    return [obj];
  }
  return obj.reduce(reducer, []);
}
