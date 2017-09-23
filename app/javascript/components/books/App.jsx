import React, { Component } from 'react';
import styled from 'styled-components';
import { toUpper } from 'ramda';
import BooksSearch from './BooksSearch.jsx';
import BooksList from './BooksList.jsx';

const AppContainer = styled.div`
  border: 2px solid black;
  margin: 0 auto;
  text-align: left;
  width: 80%;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`;

const AppTitle = styled.h1`
  font-size: 42px;
  font-style: italic;
  padding: 20px 0;
`;

class App extends Component {
  render () {
    const { books } = this.props;

    return (
      <div>
        <AppContainer>
          <AppTitle> The book shelf </AppTitle>
          <BooksSearch />
          <BooksList books={books} />
        </AppContainer>
      </div>
    );
  }
}

export default App;
