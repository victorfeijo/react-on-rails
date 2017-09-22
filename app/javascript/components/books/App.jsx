import React, { Component } from 'react';
import styled from 'styled-components';
import { toUpper } from 'ramda';

const SearchCnt = styled.div`
  border: 2px solid black;
  margin: 20px;
  display: flex;
  height: 100px;
`;

class App extends Component {
  render () {
    const { name } = this.props;

    return (
      <div>
        Application root { toUpper(name) }
        <SearchCnt />
      </div>
    );
  }
}

export default App;
