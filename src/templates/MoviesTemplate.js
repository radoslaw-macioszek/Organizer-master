import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import withContext from '../hoc/withContext';
import SearchedMovies from '../views/Movies/SearchedMovies';

import UserPageTemplate from './UserPageTemplate';
import RightSearchBar from '../components/organisms/RightSearchBar/RightSearchBar';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Input from '../components/atoms/Input/Input';

const StyledWrapper = styled.div`
  padding: 25px 30px 25px 70px;
  position: relative;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px;
`;

const StyledGrid = styled.div`
  display: flex;
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-template-rows: repeat(6, 1fr); */

  /* grid-gap: 15px; */
`;

// position fixed, zeby nawet przy scrollowaniu byl w tym samym miejscu
const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 50px;

  position: fixed;
  bottom: 40px;
  right: 40px;

  width: 180px;
  font-size: 1.7rem;
  font-weight: bold;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);

  background-size: 40%;
  z-index: 1000000;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 25px;
  margin-right: 2px;
  /* background-color: ${({ theme }) => theme.greyTransparent}; */
  background-color: ${({ theme }) => theme.movies};

  padding: 15px 30px;
  font-weight: bold;

  &:hover {
    /* background: ${({ theme }) => theme.grey300Transparent}; */
    color: ${({ theme }) => theme.movies};
    border: 1px solid ${({ theme }) => theme.movies};

  background-color: ${({ theme }) => theme.greyTransparent};

    border-bottom: 4px solid ${({ theme }) => theme.movies};
  }
`;

const StyledCategory = styled.div`
  display: flex;
  /* justify-content: center; */
  margin: 0px 150px 50px 0;
  border-bottom: 1px solid ${({ theme }) => theme.movies};
  border-radius: 5px;
`;

const MoviesTemplate = ({ pageContext, children }) => {
  const [barVisible, setBarVisibility] = useState(false);
  const moviesLength = useSelector((state) => state.natReducer.movies);
  const seriesLength = useSelector((state) => state.natReducer.series);

  return (
    <UserPageTemplate>
      <>
        <StyledWrapper>
          <StyledCategory>
            <StyledLink as={Link} to="/movies">
              Movies
            </StyledLink>
            <StyledLink as={Link} to="/series">
              Series
            </StyledLink>
          </StyledCategory>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>
              {pageContext === 'movies'
                ? `${moviesLength.length} ${pageContext}`
                : `${seriesLength.length} ${pageContext}`}
            </StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <RightSearchBar isVisible={barVisible}>
            <SearchedMovies />
          </RightSearchBar>
          <StyledButtonIcon onClick={() => setBarVisibility(!barVisible)} activecolor={pageContext}>
            Find new movie!
          </StyledButtonIcon>
        </StyledWrapper>
      </>
    </UserPageTemplate>
  );
};

export default withContext(MoviesTemplate);
