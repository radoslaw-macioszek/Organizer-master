import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import withContext from '../../hoc/withContext';

import { addToMovieList } from '../../store/NATitems/NATitems.reducer';
import { devices } from '../../Devices/devices';
import MovieSearchToolTip from '../../components/molecules/ToolTip/SearchMovieToolTip';

const StyledBookWrapper = styled.div`
  display: flex;
  margin: 1rem 1rem 3rem 0;
  border-radius: 0.5rem;

  position: relative;
  box-shadow: 1rem 0.5rem 2rem rgba(0, 0, 0, 0.3);
  width: 100%;
`;

const StyledDetails = styled.div`
  width: 100%;
  margin: 1rem 1rem;

  position: relative;
`;

const StyledImage = styled.img`
  height: 20vh;
  width: 9vw;
  @media ${devices.tablet} {
    width: 15vw;
  }

  @media ${devices.mobileL} {
    width: 20vw;
  }
`;

const StyledToolTipImage = styled.img`
  height: 16vh;
  width: 7vw;
  margin-right: 1.5rem;

  @media ${devices.tablet} {
    width: 11vw;
  }

  @media ${devices.mobileL} {
    display: none;
  }
`;

const StyledDescription = styled.div`
  position: relative;
  text-align: justify;
  padding: 1rem;
`;

const StyledToolTip = styled(MovieSearchToolTip)`
  ${StyledDescription}:hover & {
    visibility: visible;
    border: 2px solid ${({ theme }) => theme.movies};
    transform: translate(-50%, -50%);
    opacity: 1;
    background-color: white;
    z-index: 999999999999999999;

    display: flex;
    box-shadow: 4rem 6rem 2rem -1rem rgba(0, 0, 0, 0.3);
  }

  @media ${devices.laptopL} {
    width: 35vw;
    left: 250%;
  }

  @media ${devices.laptop} {
    width: 40vw;
    left: 290%;
  }

  @media ${devices.tablet} {
    width: 55vw;
    left: 235%;
  }

  @media ${devices.mobileL} {
    width: 74vw;
    padding: 3rem 1rem 6rem;
    left: 141%;
  }

  @media ${devices.mobileM} {
    width: 69vw;
  }
`;

const StyledTitle = styled.h3`
  font-size: 2.5rem;
  margin-top: 3px;
  margin-bottom: 2rem;

  @media ${devices.mobileL} {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const StyledParagraph = styled.p`
  margin: 0 0 1.2rem 1rem;
  margin-bottom: 1.2rem;

  @media ${devices.mobileL} {
    margin: 0 0 1.2rem 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

const StyledAddButton = styled.button`
  position: absolute;
  bottom: 1vh;
  right: 1.5rem;
  padding: 0.6rem 0.6rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-0.2rem);
  }

  @media ${devices.mobileM} {
    bottom: -15%;
    left: -9.5rem;
  }
`;

const StyledVages = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;
  margin-top: -1rem;
  margin-bottom: 0;

  p {
    margin: 0.5rem 0 0 0;
  }
`;

const StyledColumn = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  span {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    color: grey;
    margin: 0;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 6vw;
  display: block;
  font-size: 1.6rem;

  @media ${devices.mobileL} {
    font-size: 1.1rem;
  }
`;

const SearchedMoviesAndSeries = ({ pageContext }) => {
  const series = 'series';
  const movies = 'movies';
  const dispatch = useDispatch();
  const searchedMovies = useSelector((state) => state.moviesReducer.data);

  const image =
    'https://www.ohgizmo.com/wp-content/uploads/2014/11/gifts-for-men-who-love-movies.jpg';

  return (
    <>
      {searchedMovies.map((item) => (
        <StyledBookWrapper key={item.id}>
          <StyledDescription>
            <StyledImage
              src={
                item.poster_path === null
                  ? image
                  : `https://image.tmdb.org/t/p/w500${item.poster_path}`
              }
              alt="book"
            />
            <StyledToolTip>
              <StyledToolTipImage
                src={
                  item.poster_path === null
                    ? image
                    : `https://image.tmdb.org/t/p/w500${item.poster_path}`
                }
                alt="book"
              />
              <StyledDetails>
                <StyledTitle>{pageContext === 'movies' ? item.title : item.name}</StyledTitle>
                <StyledVages>
                  <p>
                    <FaStar color={'#ffc107'} /> {item.vote_average}
                  </p>
                  <StyledColumn>
                    Votes:
                    <StyledSpan>{item.vote_count}</StyledSpan>
                  </StyledColumn>
                  <p>
                    {pageContext === 'movies'
                      ? item.release_date && item.release_date.slice(0, 4)
                      : item.first_air_date && item.first_air_date.slice(0, 4)}
                  </p>
                  <StyledColumn>
                    Popularity:
                    <StyledSpan>{item.popularity}</StyledSpan>
                  </StyledColumn>
                  <p>{item.original_language.toUpperCase()}</p>
                </StyledVages>
                <hr />
                <StyledDescription>{item.overview}</StyledDescription>
              </StyledDetails>
            </StyledToolTip>
          </StyledDescription>
          <StyledDetails>
            <StyledTitle>{pageContext === 'movies' ? item.title : item.name}</StyledTitle>
            <StyledVages>
              <StyledParagraph>
                <StyledSpan>
                  <FaStar color={'#ffc107'} /> rate:
                </StyledSpan>
                {item.vote_average}
              </StyledParagraph>
              <StyledParagraph>
                <StyledSpan>votes:</StyledSpan>
                {item.vote_count}
              </StyledParagraph>
              <StyledParagraph>
                <StyledSpan>popularity:</StyledSpan>
                {item.popularity}
              </StyledParagraph>
              <StyledParagraph>
                <StyledSpan>language:</StyledSpan>
                {item.original_language.toUpperCase()}
              </StyledParagraph>
              {pageContext === 'movies' ? (
                <StyledAddButton
                  onClick={() =>
                    dispatch(
                      addToMovieList(
                        item.id,
                        item.title,
                        `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        item.vote_average,
                        item.popularity,
                        item.release_date,
                        movies,
                      ),
                    )
                  }
                >
                  + Add to your movie list
                </StyledAddButton>
              ) : (
                <StyledAddButton
                  onClick={() =>
                    dispatch(
                      addToMovieList(
                        item.id,
                        item.name,
                        `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        item.vote_average,
                        item.popularity,
                        item.first_air_date,
                        series,
                      ),
                    )
                  }
                >
                  + Add to your movie list
                </StyledAddButton>
              )}
            </StyledVages>
          </StyledDetails>
        </StyledBookWrapper>
      ))}
    </>
  );
};

export default withContext(SearchedMoviesAndSeries);
