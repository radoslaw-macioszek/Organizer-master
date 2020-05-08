import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';

import { addToMovieList } from '../../store/NATitems/NATitems.reducer';

const StyledBookWrapper = styled.div`
  display: flex;
  margin: 10px 10px 30px;
  border-radius: 5px;

  position: relative;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.3);
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
  width: 30vw;
  top: 100%;
  left: 250%;
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
  margin-top: 0;
  margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
  margin: 0 0 12px 10px;
  margin-bottom: 12px;
`;

const StyledAddButton = styled.button`
  position: absolute;
  bottom: 1vh;
  left: 0;
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

const SearchedMovies = () => {
  const dispatch = useDispatch();
  const searchedMovies = useSelector((state) => state.moviesReducer.data);
  console.log('serched', searchedMovies);

  const image =
    'https://www.ohgizmo.com/wp-content/uploads/2014/11/gifts-for-men-who-love-movies.jpg';

  return (
    <>
      {searchedMovies.map((movie) => (
        <StyledBookWrapper>
          <StyledDescription>
            <StyledImage
              src={
                movie.poster_path === null
                  ? image
                  : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              }
              alt="book"
            />
            <StyledToolTip>
              <StyledToolTipImage
                src={
                  movie.poster_path === null
                    ? image
                    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
                alt="book"
              />
              <StyledDetails>
                <StyledTitle>{movie.title}</StyledTitle>
                <StyledVages>
                  <p>
                    <FaStar color={'#ffc107'} /> {movie.vote_average}
                  </p>
                  <StyledColumn>
                    Votes:
                    <span>{movie.vote_count}</span>
                  </StyledColumn>
                  <p>{movie.release_date && movie.release_date.slice(0, 4)}</p>
                  <StyledColumn>
                    Popularity:
                    <span>{movie.popularity}</span>
                  </StyledColumn>
                  <p>{movie.original_language.toUpperCase()}</p>
                </StyledVages>
                <hr />
                <StyledDescription>{movie.overview}</StyledDescription>
              </StyledDetails>
            </StyledToolTip>
          </StyledDescription>
          <StyledDetails>
            <StyledTitle>{movie.title}</StyledTitle>

            <StyledParagraph>
              <StyledSpan>
                <FaStar color={'#ffc107'} /> rate:
              </StyledSpan>
              {movie.vote_average}
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan>votes:</StyledSpan>
              {movie.vote_count}
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan>popularity:</StyledSpan>
              {movie.popularity}
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan>language:</StyledSpan>
              {movie.original_language.toUpperCase()}
            </StyledParagraph>
            <StyledAddButton
              onClick={() =>
                dispatch(
                  addToMovieList(
                    movie.id,
                    movie.title,
                    `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    movie.vote_average,
                    movie.popularity,
                    movie.release_date,
                  ),
                )
              }
            >
              + Add to your movie list
            </StyledAddButton>
          </StyledDetails>
        </StyledBookWrapper>
      ))}
    </>
  );
};

export default SearchedMovies;
