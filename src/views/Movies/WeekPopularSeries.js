import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import MovieBar from '../../components/organisms/MovieBar/MovieBar';

import { loadMovieDetail } from '../../store/movies/movies.reducer';

const StyledImage = styled.img`
  height: 20vh;
  width: 8.5vw;
  border-radius: 5px;
`;

const StyledMovieRow = styled.div`
  display: flex;
  position: relative;
  top: -215px;
  justify-content: center;
`;

const StyledButton = styled.button`
  height: 23vh;
  width: 4vw;
  position: absolute;
  right: -75px;
  top: 51px;
  background-color: ${({ theme }) => theme.greyTransparent};
  border: none;
  border-radius: 5px;
  font-size: 4rem;
  color: ${({ theme }) => theme.grey300Transparent};
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.grey300Transparent};
    color: white;
  }
`;

const StyledLeftButton = styled(StyledButton)`
  left: -85px;
`;

// obracanie karty

const Flipper = styled.div`
  transition: all 1s;
  transform-style: preserve-3d;

  position: relative;
`;

const FlipContainer = styled.div`
  perspective: 1000px;
  height: 20vh;
  width: 10vw;

  &:hover ${Flipper} {
    transform: rotateY(-180deg) scale(1.1) translateX(9%);
    z-index: 999;
  }
`;

const Front = styled.div`
  height: 20vh;
  width: 8vw;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);

  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;

  z-index: 2;
`;
const Back = styled(Front)`
  background-color: ${({ theme }) => theme.movies};
  z-index: 1;
  transform: rotateY(180deg);
`;

//

const StyledParagraph = styled.span`
  font-size: 11px;
  margin: 0 10px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 13px;
  margin: 0 0 2px;
`;
const StyledDateParagraph = styled.span`
  margin: 4px 10px 1px;
  font-size: 11px;
`;

const StyledDate = styled.p`
  text-align: center;
  font-size: 13px;
  margin: 4px 0 2px;
`;

const StyledHeader = styled.h6`
  padding: 0 10px 10px;
  margin-top: 15px;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 0.6px solid ${({ theme }) => theme.grey300LowTransparent};
`;

const StyledCardButton = styled.button`
  background-color: ${({ theme }) => theme.grey100};
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translatex(-50%);
  padding: 3px 6px;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
`;

const MostPopularSeries = ({ openModal }) => {
  const name = 'Most popular series in this week';
  const series = 'tv';

  const dispatch = useDispatch();
  // paginacja
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  const mostPopularMovies = useSelector((state) => state.moviesReducer.weekSeries);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentSeries = mostPopularMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const allPage = Math.ceil(mostPopularMovies.length / moviesPerPage);
  //
  // details
  const [movieId, setMovieId] = useState(null);

  const handleClick = (id) => {
    setMovieId(id);
    openModal();
  };

  useEffect(() => {
    if (movieId) {
      dispatch(loadMovieDetail(movieId, series));
    }
  }, [dispatch, movieId]);
  //
  return (
    <StyledMovieRow>
      <StyledButton onClick={() => setCurrentPage(currentPage === allPage ? 1 : currentPage + 1)}>
        <FiChevronRight />
      </StyledButton>
      <MovieBar page={name}>
        {currentSeries &&
          currentSeries.map((movie) => (
            <FlipContainer key={movie.id}>
              <Flipper>
                <Front>
                  <StyledImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </Front>
                <Back>
                  <StyledHeader>{movie.name}</StyledHeader>
                  <StyledParagraph>
                    Average rate:
                    <StyledSpan>{movie.vote_average}</StyledSpan>
                  </StyledParagraph>
                  <StyledParagraph>
                    Popularity:
                    <StyledSpan>{movie.popularity}</StyledSpan>
                  </StyledParagraph>
                  <StyledDateParagraph>
                    Release date:
                    <StyledDate>{movie.first_air_date}</StyledDate>
                  </StyledDateParagraph>
                  <StyledCardButton onClick={() => handleClick(movie.id)}>
                    see more details
                  </StyledCardButton>
                </Back>
              </Flipper>
            </FlipContainer>
          ))}
      </MovieBar>
      <StyledLeftButton
        onClick={() => setCurrentPage(currentPage === 1 ? allPage : currentPage - 1)}
      >
        <FiChevronLeft />
      </StyledLeftButton>
    </StyledMovieRow>
  );
};

export default MostPopularSeries;
