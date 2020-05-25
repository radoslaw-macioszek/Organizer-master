import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import withContext from '../../hoc/withContext';

import BooksToRead from './BooksToRead';
import BooksFavorite from './BooksFavorite';
import BooksRead from './BooksRead';
import { devices } from '../../Devices/devices';

import OverlapCategory from '../../components/atoms/Overlap/OverlapCategory';
import StyledOverlap from '../../components/atoms/OverlapLink/Overlap';

const StyledGrid = styled.div``;

const FirstColumn = styled.div`
  margin-top: 32rem;
  grid-row: span 2;

  @media ${devices.tablet} {
    margin-top: 4rem;
  }
`;

const StyledContent = styled.div`
  border-radius: 0.5rem;
`;

const SecondColumn = styled.div`
  height: 50vh;
  position: absolute;
  top: 60%;
  right: 4.5rem;
  width: 35%;

  @media ${devices.tablet} {
    display: none;
  }
`;

const StyledParagraph = styled.p`
  font-family: serif;
  margin: 2rem 0px 3.5rem 1rem;
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
  /* width: 87vw; */
  width: 97%;
  position: absolute;
  right: 0;
  top: 10em;

  @media ${devices.tablet} {
    display: none;
  }
`;
const StyledThirdParagraph = styled.p`
  font-family: serif;
  margin: 0 0 1rem;
  font-weight: bold;
  font-size: 2.2rem;
`;

const StyledThirdContent = styled.div`
  overflow: scroll;
  display: flex;
  border: 1px solid ${({ theme }) => theme.books};
  height: 26vh;
  padding: 1.5rem 2rem;
  margin-right: 4.5rem;
  border-radius: 0.5rem;
  box-shadow: 1rem 1.5rem 2rem rgba(0, 0, 0, 0.16);
`;

const StyledOverlapCategory = styled(OverlapCategory)`
  display: none;
  @media ${devices.tablet} {
    width: 90%;
    display: inline-flex;
    border-bottom: 1px solid ${({ theme }) => theme.books};
  }
`;

const StyledOverlapLink = styled(StyledOverlap)`
  background-color: white;
  border: 2px solid ${({ theme }) => theme.books};

  &:hover {
    color: ${({ theme }) => theme.books};
    border: 1px solid ${({ theme }) => theme.books};
    border-bottom: 0.4rem solid ${({ theme }) => theme.books};
  }
`;

const StyledFavoriteColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-right: 2rem;

  @media ${devices.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// dimensions functions

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

//

const Book = ({ pageContext }) => {
  const [view, setView] = useState('books');
  const { height, width } = useWindowDimensions();

  console.log('window', width);

  const favLength = useSelector((state) => state.natReducer.favoriteBooks).length;
  const readedLength = useSelector((state) => state.natReducer.readedBooks).length;

  return (
    <StyledGrid>
      {pageContext === 'books' && (
        <StyledOverlapCategory>
          <StyledOverlapLink onClick={() => setView('books')}>Books</StyledOverlapLink>
          <StyledOverlapLink onClick={() => setView('readed')}>Readed</StyledOverlapLink>
          <StyledOverlapLink onClick={() => setView('favorite')}>Favorite</StyledOverlapLink>
        </StyledOverlapCategory>
      )}
      <FirstColumn>
        <StyledContent>
          {view === 'readed' && width < 768 ? (
            <>
              <StyledParagraph>Readed ({readedLength}) : </StyledParagraph>
              <BooksRead />
            </>
          ) : view === 'favorite' && width < 768 ? (
            <>
              <StyledThirdParagraph>Favorite ({favLength}) : </StyledThirdParagraph>
              <StyledFavoriteColumn>
                <BooksFavorite />
              </StyledFavoriteColumn>
            </>
          ) : (
            <BooksToRead />
          )}
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
