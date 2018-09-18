import * as R from 'ramda';

export function notEquals(arg1: any, arg2: any): boolean {
  return R.complement(R.equals)(arg1, arg2);
}

export const isNotNil = R.complement(R.isNil);