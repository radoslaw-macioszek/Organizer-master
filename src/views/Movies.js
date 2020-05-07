import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../components/molecules/Modal/Modal';

import MoviesTemplate from '../templates/MoviesTemplate';

import TopRatedMovies from './Movies/TopRatedMovies';
import MostPopularMovies from './Movies/MostPopularMovies';
import TopRatedSeries from './Movies/TopRatedSeries';
import MostPopularSeries from './Movies/MostPopularSeries';
import WeekPopularSeries from './Movies/WeekPopularSeries';
import WeekPopularMovies from './Movies/WeekPopularMovies';

import MainMovieColumn from './Movies/MainMovieColumn';

// zamykanie modala po kliknieciu poza modal

const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  margin-left: 130px;
`;

const StyledLeftSide = styled.div`
  width: 41vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;

  padding: 10px;

  height: 180vh;
  overflow: scroll;
  border: 1px solid ${({ theme }) => theme.movies};
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const StyledScroll = styled.div`
  border-radius: 5px;
`;

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
  const title = 'My list to watch';
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
      <StyledScroll>
        <button>Movies</button>
        <button>Series</button>

        {title}
        <StyledLeftSide>
          <MainMovieColumn />
        </StyledLeftSide>
      </StyledScroll>
      <StyledRightSide>
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
      </StyledRightSide>
    </MoviesTemplate>
  );
};

export default Movies;
