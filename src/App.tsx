// import { Difference } from 'ramda/Difference';
// import { Flatten } from 'ramda/Flatten';
// import { Path } from 'ramda/Path';
// import { Dfs } from 'graph/Dfs';
// import { Bfs } from 'graph/Bfs';
// import { Deikstra } from 'graph/Deikstra';
import { calcAnagram } from 'other/anagrama';
import { defParams, scope1 } from 'other/defParams';

import * as React from 'react';

console.log('test',
  calcAnagram(['asdf', 'fsad'])
);

defParams(4);
scope1();

class App extends React.Component {
  public render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

// <Path />
// <Flatten />
// <Difference />

export default App;
