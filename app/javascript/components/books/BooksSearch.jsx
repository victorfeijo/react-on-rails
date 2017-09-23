import React, { Component } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 1em;
`;

const TextField = styled.input`
  border: 2px solid black;
  border-radius: 4px;
  font-size: 16px;
  width: 280px;
  margin: 4px;
`;

const SubmitButton = styled.button`
  color: black;
  margin: 4px;
  font-size: 16px;
  padding: 4px 12px;
  border: 2px solid black;
  border-radius: 4px;
`;

class BooksSearch extends Component {
  render () {
    return (
      <div>
        <InputContainer>
          <TextField />
          <SubmitButton> Search </SubmitButton>
        </InputContainer>
      </div>
    );
  }
}

export default BooksSearch;
