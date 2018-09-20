import * as R from 'ramda';

export function difference(arr1: any[], arr2: any[]): object {
  const output = [];
  for (const item of arr1) {
    if (arr2.indexOf(item) === -1) {
      output.push(item);
      console.log('pushed', item);
    }
  }
  return output;
}