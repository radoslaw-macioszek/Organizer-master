import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MoviesTemplate from '../templates/MoviesTemplate';
import styled from 'styled-components';
import Modal from '../components/molecules/Modal/Modal';

import TopRatedMovies from './Movies/TopRatedMovies';
import MostPopularMovies from './Movies/MostPopularMovies';
import TopRatedSeries from './Movies/TopRatedSeries';
import MostPopularSeries from './Movies/MostPopularSeries';
import WeekPopularSeries from './Movies/WeekPopularSeries';
import WeekPopularMovies from './Movies/WeekPopularMovies';

const StyledMovieColumn = styled.div`
  grid-row: span 6;
`;

// zamykanie modala po kliknieciu poza modal

function useOnClickOutside(node, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!node.current || node.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [node, handler]);
}
//
const Movies = () => {
  const [isModalOpen, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  // do modala + ref w divie (mozna go jeszcze przekazac przez inna nazwe niz ref badz forward ref'a)
  const node = useRef();

  useOnClickOutside(node, () => setModal(false));
  //
  return (
    <MoviesTemplate>
      <StyledMovieColumn>xx</StyledMovieColumn>
      <TopRatedMovies openModal={openModal} />
      <MostPopularMovies openModal={openModal} />
      <WeekPopularMovies openModal={openModal} />

      <TopRatedSeries openModal={openModal} />
      <MostPopularSeries openModal={openModal} />
      <WeekPopularSeries openModal={openModal} />

      {isModalOpen && (
        <div ref={node}>
          <Modal />
        </div>
      )}
    </MoviesTemplate>
  );
};

export default Movies;
