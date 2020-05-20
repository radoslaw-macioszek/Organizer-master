import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import withContext from '../../hoc/withContext';

import { addToMovieList } from '../../store/NATitems/NATitems.reducer';

const StyledBookWrapper = styled.div`
  display: flex;
  margin: 10px 10px 30px 0;
  border-radius: 5px;

  position: relative;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.3);
  width: 35vw;
`;

const StyledDetails = styled.div`
  flex-direction: column;
  width: 100%;
  margin: 10px 10px;

  position: relative;
`;

const StyledImage = styled.img`
  height: 20vh;
  width: 9vw;
`;

const StyledToolTipImage = styled.img`
  height: 16vh;
  width: 7vw;
  margin-right: 15px;
`;

const StyledDescription = styled.div`
  position: relative;
  text-align: justify;
  padding: 10px;
`;

const StyledToolTip = styled.span`
  visibility: hidden;

  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  color: #555;
  font-weight: 300;
  padding: 30px 30px 60px;
  position: absolute;
  width: 25vw;
  top: 100%;
  left: 200%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
  text-align: center;

  ${StyledDescription}:hover & {
    visibility: visible;
    border: 2px solid ${({ theme }) => theme.movies};
    transform: translate(-50%, -50%);
    opacity: 1;
    background-color: white;
    z-index: 999999999999999999;

    display: flex;
    box-shadow: 40px 60px 20px -10px rgba(0, 0, 0, 0.3);
  }
`;

const StyledTitle = styled.h3`
  font-size: 25px;
  margin-top: 3px;
  margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
  margin: 0 0 12px 10px;
  margin-bottom: 12px;
`;

const StyledAddButton = styled.button`
  position: absolute;
  bottom: 1vh;
  right: 15px;
  padding: 6px 6px;
  font-size: 11px;
  border-radius: 5px;
`;

const StyledVages = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 0;

  p {
    margin: 5px 0 0 0;
  }
`;

const StyledColumn = styled.p`
  display: flex;
  flex-direction: column;

  font-size: 10px;

  span {
    margin: 0;
    font-size: 15px;
  }

  p {
    color: grey;
    margin: 0;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 6vw;
  display: inline-flex;
  font-size: 16px;
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
                    <span>{item.vote_count}</span>
                  </StyledColumn>
                  <p>
                    {pageContext === 'movies'
                      ? item.release_date && item.release_date.slice(0, 4)
                      : item.first_air_date && item.first_air_date.slice(0, 4)}
                  </p>
                  <StyledColumn>
                    Popularity:
                    <span>{item.popularity}</span>
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
          </StyledDetails>
        </StyledBookWrapper>
      ))}
    </>
  );
};

export default withContext(SearchedMoviesAndSeries);
