import React, { useState } from 'react';
import styled from 'styled-components';

import MovieBar from '../../components/organisms/MovieBar/MovieBar';
import FlipAnimation from '../../components/molecules/FlipAnimation/FlipAnimation';
import RightArrowButton from '../../components/atoms/ArrowButtons/RightArrowButton';
import LeftArrowButton from '../../components/atoms/ArrowButtons/LeftArrowButton';
import MovieRow from '../../components/atoms/MovieRow/MovieRow';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const StyledMovieRow = styled(MovieRow)`
  top: 0;
`;

const CategoryBar = ({ openModal, type, title, genre }) => {
  console.log('type', type);
  // paginacja
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);
  console.log(currentPage);
  const page = type;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = page.slice(indexOfFirstMovie, indexOfLastMovie);

  const allPage = Math.ceil(page.length / moviesPerPage);
  console.log('all', allPage);

  return (
    <StyledMovieRow>
      <RightArrowButton
        onClick={() => setCurrentPage(currentPage === allPage ? 1 : currentPage + 1)}
      >
        <FiChevronRight />
      </RightArrowButton>
      <MovieBar page={title}>
        {currentMovies &&
          currentMovies.map((movie) => (
            <FlipAnimation
              key={movie.id}
              id={movie.id}
              path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={genre === 'movie' ? movie.title : movie.name}
              rate={movie.vote_average}
              popularity={movie.popularity}
              date={genre === 'movie' ? movie.release_date : movie.first_air_date}
              openModal={openModal}
              name={genre}
            />
          ))}
      </MovieBar>
      <LeftArrowButton
        onClick={() => setCurrentPage(currentPage === 1 ? allPage : currentPage - 1)}
      >
        <FiChevronLeft />
      </LeftArrowButton>
    </StyledMovieRow>
  );
};

export default CategoryBar;
