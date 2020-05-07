import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Book from './Book';

const ThirdColumn = styled.div`
  height: 50vh;
  position: relative;
  top: -75px;
`;
const StyledParagraph = styled.p`
  font-size: 30px;
  font-family: serif;
  margin-top: 0;
`;

const StyledContent = styled.div`
  border: 1px solid ${({ theme }) => theme.grey100};
  padding: 15px 15px 150px 25px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const BooksFavorite = () => {
  const check = useSelector((state) => state.natReducer.favoriteBooks);
  const sortedFavoriteBooks = check.sort((a, b) => a.position - b.position);

  return (
    <ThirdColumn>
      <StyledParagraph>Favorite: </StyledParagraph>
      <StyledContent>
        {check
          ? sortedFavoriteBooks.map((book, i) => (
              <Book
                key={book.id}
                id={book.id}
                cardType="favoriteBooks"
                title={book.title}
                created={book.created}
                rankPosition={i + 1}
              />
            ))
          : ' '}
      </StyledContent>
    </ThirdColumn>
  );
};

export default BooksFavorite;
