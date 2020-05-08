import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../components/molecules/Modal/Modal';
import { Link } from 'react-router-dom';

import MoviesTemplate from '../templates/MoviesTemplate';
import Heading from '../components/atoms/Heading/Heading';

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

  height: 100vh;
  overflow: scroll;
  border-top: 1px solid ${({ theme }) => theme.movies};
  border-left: 1px solid ${({ theme }) => theme.movies};
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const StyledScroll = styled.div`
  border-radius: 5px;
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;
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
const Series = () => {
  const title = 'My list of series to watch';
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
        <StyledHeading>{title}</StyledHeading>
        <StyledLeftSide>
          <MainMovieColumn />
        </StyledLeftSide>
      </StyledScroll>
      <StyledRightSide>
        {/* <TopRatedMovies openModal={openModal} />
        <MostPopularMovies openModal={openModal} />
        <WeekPopularMovies openModal={openModal} /> */}

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

export default Series;
