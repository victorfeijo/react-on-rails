import React, { Component } from 'react';
import styled from 'styled-components';
import BooksCard from './BooksCard.jsx';

const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class BooksList extends Component {
  render () {
    const { books } = this.props;
    console.log(books);

    return (
      <div>
        {
          books.map(book => (
            <BooksCard key={book.id} book={book} />
          ))
        }
      </div>
    );
  }
}

export default BooksList;
