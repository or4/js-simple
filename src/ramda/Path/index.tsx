import * as R from 'ramda';
import React from 'react';

export class Path extends React.PureComponent {
  public render() {
    return (
      <div>
        {String(R.path(['a', 'b'], {a: {b: 12}}))}
      </div>
    );
  }
}
