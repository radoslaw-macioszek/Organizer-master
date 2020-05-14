import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Book from './Book';

const SecondColumn = styled.div`
  height: 50vh;
  display: grid;
  position: relative;
  top: 20px;
`;

const StyledParagraph = styled.p`
  font-size: 30px;
  font-family: serif;
  margin-top: 0;
  height: 3vh;
`;

const StyledContent = styled.div`
  overflow: scroll;
  height: 45vh;
  border: 1px solid ${({ theme }) => theme.grey100};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const BooksRead = () => {
  const check = useSelector((state) => state.natReducer.readedBooks);

  return (
    <SecondColumn>
      <StyledParagraph>Readed: </StyledParagraph>
      <StyledContent>
        {check
          ? check.map((book, i) => (
              <Book
                key={book.id}
                id={book.id}
                cardType="readedBooks"
                title={book.title}
                created={book.created}
                rankPosition={i + 1}
              />
            ))
          : ' '}
      </StyledContent>
    </SecondColumn>
  );
};

export default BooksRead;
