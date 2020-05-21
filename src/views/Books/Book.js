import React from 'react';

import styled from 'styled-components';
import withContext from '../../hoc/withContext';

import BooksToRead from './BooksToRead';
import BooksFavorite from './BooksFavorite';
import BooksRead from './BooksRead';

const StyledGrid = styled.div``;

const FirstColumn = styled.div`
  margin-top: 100px;
  grid-row: span 2;
`;

const StyledContent = styled.div`
  border-radius: 5px;
`;

const SecondColumn = styled.div`
  height: 50vh;
  position: absolute;
  top: 43%;
  right: 45px;
  width: 35%;
`;

const StyledParagraph = styled.p`
  font-family: serif;
  margin: 20px 0px 15px 10px;
  font-weight: bold;
  font-size: 22px;
`;

const StyledSecondContent = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.16);
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
  margin: 20px 0px 10px 10px;
  font-weight: bold;
  font-size: 22px;
`;

const StyledThirdContent = styled.div`
  overflow: scroll;
  display: flex;
  border: 1px solid ${({ theme }) => theme.books};
  height: 26vh;
  padding: 5px;
  padding-left: 10px;
  margin-right: 45px;
  border-radius: 5px;
  box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.16);
`;

const Book = () => {
  return (
    <StyledGrid>
      <FirstColumn>
        <StyledContent>
          <BooksToRead />
        </StyledContent>
      </FirstColumn>
      <SecondColumn>
        <StyledParagraph>Readed: </StyledParagraph>
        <StyledSecondContent>
          <BooksRead />
        </StyledSecondContent>
      </SecondColumn>

      <ThirdColumn>
        <StyledThirdParagraph>Favorite: </StyledThirdParagraph>
        <StyledThirdContent>
          <BooksFavorite />
        </StyledThirdContent>
      </ThirdColumn>
    </StyledGrid>
  );
};

export default withContext(Book);
