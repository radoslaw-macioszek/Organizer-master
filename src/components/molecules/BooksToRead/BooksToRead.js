import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Book from '../Book/Book';

const FirstColumn = styled.div`
  grid-row: span 2;
`;

const StyledParagraph = styled.p`
  font-size: 30px;
  font-family: serif;
  margin-top: 0;
`;

const StyledContent = styled.div`
  /* padding: 10px 10px 150px 10px; */
  border-radius: 5px;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); */
`;

const BookToRead = () => {
  const check = useSelector((state) => state.natReducer.books);

  // propsy przekazane do Book,
  return (
    <FirstColumn>
      <StyledParagraph>To Read: </StyledParagraph>
      <StyledContent>
        {check.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            cardType="books"
            title={book.title}
            created={book.created}
            description={book.description}
            image={book.image}
          />
        ))}
      </StyledContent>
    </FirstColumn>
  );
};

export default BookToRead;
