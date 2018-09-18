import * as R from 'ramda';

function getValue(object: object, key?: string) {
  if (R.isNil(key)) {
    return;
  }

  return object[key];
}

export function path(arr: string[], object: object): any {
  if (R.isNil(arr) || R.equals(arr.length, 0)) {
    return arr;
  }

  let value = object;

  while (true) {
    const p = arr.shift();
    if (R.isNil(p) || R.isNil(value)) {
      return value;
    }
    value = getValue(value, p);
  }
}