// import { Difference } from 'ramda/Difference';
// import { Flatten } from 'ramda/Flatten';
// import { Path } from 'ramda/Path';
import { Dfs } from 'graph/Dfs';
import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Dfs />
      </div>
    );
  }
}

// <Path />
// <Flatten />
// <Difference />

export default App;
