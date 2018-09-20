import { Difference } from 'ramda/Difference';
import { Flatten } from 'ramda/Flatten';
import { Path } from 'ramda/Path';
import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Path />
        <Flatten />
        <Difference />
      </div>
    );
  }
}

export default App;
