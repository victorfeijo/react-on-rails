import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 4px;
  border: 2px solid black;
  margin: 40px;
`;

const CardImage = styled.div`
  height: 320px;
  margin-right: 40px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
`;

const BookTitle = styled.p`
  font-size: 30px;
`;

const BookDescription = styled.p`
  font-size: 22px;
`;

const BookAuthor = styled.p`
  font-size: 20px;
`;

// TODO
const BookCreatedAt = styled.p`
`;


class BooksCard extends Component {
  render () {
    const { book } = this.props;

    return (
      <Card>
        <CardImage>
          <Image src={book.image_url} />
        </CardImage>
        <CardContent>
          <BookTitle> {book.title} </BookTitle>
          <BookDescription> {book.description} </BookDescription>
          <BookAuthor> Author: {book.author_name} </BookAuthor>
        </CardContent>
      </Card>
    );
  }
}

export default BooksCard;
