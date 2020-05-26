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
import StyledOverlap from '../components/atoms/OverlapLink/Overlap';
import OverlapCategory from '../components/atoms/Overlap/OverlapCategory';

import { devices } from '../Devices/devices';

const StyledWrapper = styled.div`
  padding: 25px 30px 25px;
  margin-left: 40px;
  position: relative;

  @media ${devices.laptop} {
    margin-left: 0;
  }

  @media ${devices.laptop} {
    margin-left: -2rem;
  }
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
  margin: 0 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGrid = styled.div`
  display: flex;
`;

const StyledOverlapCategory = styled(OverlapCategory)`
  @media ${devices.mobileL} {
    margin-bottom: -7rem;
  }
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

  @media ${devices.tablet} {
    width: 11rem;
  }
`;

const MoviesTemplate = ({ pageContext, children }) => {
  const [barVisible, setBarVisibility] = useState(false);
  const moviesLength = useSelector((state) => state.natReducer.movies);
  const seriesLength = useSelector((state) => state.natReducer.series);

  return (
    <UserPageTemplate>
      <>
        <StyledWrapper>
          <StyledPageHeader>
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>
              {pageContext === 'movies'
                ? `${moviesLength.length} ${pageContext}`
                : `${seriesLength.length} ${pageContext}`}
            </StyledParagraph>
            <Input search placeholder="Search" />
            <StyledOverlapCategory>
              <StyledOverlap as={Link} to="/movies">
                Movies
              </StyledOverlap>
              <StyledOverlap as={Link} to="/series">
                Series
              </StyledOverlap>
            </StyledOverlapCategory>
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
