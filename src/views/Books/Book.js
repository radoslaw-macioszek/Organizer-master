import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import withContext from '../../hoc/withContext';

import BooksToRead from './BooksToRead';
import BooksFavorite from './BooksFavorite';
import BooksRead from './BooksRead';

const StyledGrid = styled.div``;

const FirstColumn = styled.div`
  margin-top: 12rem;
  grid-row: span 2;
`;

const StyledContent = styled.div`
  border-radius: 0.5rem;
`;

const SecondColumn = styled.div`
  height: 50vh;
  position: absolute;
  top: 43%;
  right: 4.5rem;
  width: 35%;
`;

const StyledParagraph = styled.p`
  font-family: serif;
  margin: 2rem 0px 1.5rem 1rem;
  font-weight: bold;
  font-size: 2.2rem;
`;

const StyledSecondContent = styled.div`
  border: 1px solid lightgrey;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 1rem 1.5rem 2rem rgba(0, 0, 0, 0.16);
`;

const ThirdColumn = styled.div`
  height: 20vh;
  width: 50vw;
  position: absolute;
  right: 0;
  top: 0;
`;
const StyledThirdParagraph = styled.p`
  font-family: serif;
  margin: 2rem 0px 1rem 1rem;
  font-weight: bold;
  font-size: 2.2rem;
`;

const StyledThirdContent = styled.div`
  overflow: scroll;
  display: flex;
  border: 1px solid ${({ theme }) => theme.books};
  height: 27vh;
  padding: 1.5rem 2rem;
  margin-right: 4.5rem;
  border-radius: 0.5rem;
  box-shadow: 1rem 1.5rem 2rem rgba(0, 0, 0, 0.16);
`;

const Book = () => {
  const favLength = useSelector((state) => state.natReducer.favoriteBooks).length;
  const readedLength = useSelector((state) => state.natReducer.readedBooks).length;

  return (
    <StyledGrid>
      <FirstColumn>
        <StyledContent>
          <BooksToRead />
        </StyledContent>
      </FirstColumn>
      <SecondColumn>
        <StyledParagraph>Readed ({readedLength}) : </StyledParagraph>
        <StyledSecondContent>
          <BooksRead />
        </StyledSecondContent>
      </SecondColumn>

      <ThirdColumn>
        <StyledThirdParagraph>Favorite ({favLength}) : </StyledThirdParagraph>
        <StyledThirdContent>
          <BooksFavorite />
        </StyledThirdContent>
      </ThirdColumn>
    </StyledGrid>
  );
};

export default withContext(Book);
