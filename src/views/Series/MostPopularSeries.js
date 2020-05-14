import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import MovieBar from '../../components/organisms/MovieBar/MovieBar';

import FlipAnimation from '../../components/molecules/FlipAnimation/FlipAnimation';

const StyledMovieRow = styled.div`
  display: flex;
  position: relative;
  top: 50px;
  justify-content: center;
`;

const StyledButton = styled.button`
  height: 21vh;
  width: 4vw;
  position: absolute;
  right: -50px;
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
  left: -70px;
`;

const MostPopularSeries = ({ openModal }) => {
  const name = 'Most popular series';
  const tv = 'tv';

  // paginacja
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  const mostPopularMovies = useSelector((state) => state.moviesReducer.popularSeries);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentSeries = mostPopularMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const allPage = Math.ceil(mostPopularMovies.length / moviesPerPage);
  //

  return (
    <StyledMovieRow>
      <StyledButton onClick={() => setCurrentPage(currentPage === allPage ? 1 : currentPage + 1)}>
        <FiChevronRight />
      </StyledButton>
      <MovieBar page={name}>
        {currentSeries &&
          currentSeries.map((series) => (
            <FlipAnimation
              key={series.id}
              id={series.id}
              path={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
              title={series.name}
              rate={series.vote_average}
              popularity={series.popularity}
              date={series.first_air_date}
              openModal={openModal}
              name={tv}
            />
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
