import React, { Component } from 'react';

class App extends Component {
  render () {
    const { name } = this.props;

    return (
      <div> Application root { name } </div>
    );
  }
}

export default App;
