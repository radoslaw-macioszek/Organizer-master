import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import withContext from '../hoc/withContext';
import SearchedMoviesAndSeries from '../views/Movies/SearchedMoviesAndSeries';

import UserPageTemplate from './UserPageTemplate';
import RightSearchBar from '../components/organisms/RightSearchBar/RightSearchBar';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Input from '../components/atoms/Input/Input';
import StyledLink from '../components/atoms/Link/Link';
import OverlapCategory from '../components/atoms/Overlap/OverlapCategory';

const StyledWrapper = styled.div`
  padding: 25px 30px 25px;
  margin-left: 40px;
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
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 5rem;

  position: fixed;
  bottom: 4rem;
  right: 4rem;

  width: 18rem;
  font-size: 1.7rem;
  font-weight: bold;
  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);

  background-size: 40%;
  z-index: 1000000;
`;

const MoviesTemplate = ({ pageContext, children }) => {
  const [barVisible, setBarVisibility] = useState(false);
  const moviesLength = useSelector((state) => state.natReducer.movies);
  const seriesLength = useSelector((state) => state.natReducer.series);

  return (
    <UserPageTemplate>
      <>
        <StyledWrapper>
          <OverlapCategory>
            <StyledLink as={Link} to="/movies">
              Movies
            </StyledLink>
            <StyledLink as={Link} to="/series">
              Series
            </StyledLink>
          </OverlapCategory>
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
            <SearchedMoviesAndSeries />
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
