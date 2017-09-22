import React, { Component } from 'react';
import { toUpper } from 'ramda';

class App extends Component {
  render () {
    const { name } = this.props;

    return (
      <div> Application root { toUpper(name) } </div>
    );
  }
}

export default App;
