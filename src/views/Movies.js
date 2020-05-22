import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../components/molecules/Modal/Modal';

import MoviesTemplate from '../templates/MoviesTemplate';
import Heading from '../components/atoms/Heading/Heading';

import TopRatedMovies from './Movies/TopRatedMovies';
import MostPopularMovies from './Movies/MostPopularMovies';
import WeekPopularMovies from './Movies/WeekPopularMovies';

import MainColumn from './Movies/MainColumn';
import WatchedMoviesAndSeries from './Movies/WatchedMoviesAndSeries';

const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  margin-left: 6vw;
`;

const StyledLeftSide = styled.div`
  width: 41vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;

  padding: 1rem;

  height: 90vh;
  overflow: scroll;
  border-top: 1px solid ${({ theme }) => theme.movies};
  border-left: 1px solid ${({ theme }) => theme.movies};

  box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
`;

const StyledBottomSide = styled(StyledLeftSide)`
  height: 69vh;
  width: 84vw;
  grid-template-columns: repeat(6, 1fr);
  padding: 2rem;
`;

const StyledScroll = styled.div`
  border-radius: 0.5rem;
`;
const StyledHeading = styled(Heading)`
  font-size: 2.4rem;
  text-align: center;
`;

const StyledTop = styled.div`
  display: flex;
`;

const StyledBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledWhole = styled.div`
  display: flex;
  flex-direction: column;
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
  const title = 'List of movies to watch';
  const title2 = 'List of watched movies';

  const [isModalOpen, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const node = useRef();

  useOnClickOutside(node, () => setModal(false));
  //
  return (
    <MoviesTemplate>
      <StyledWhole>
        <StyledTop>
          <StyledScroll>
            <StyledHeading>{title}</StyledHeading>
            <StyledLeftSide>
              <MainColumn openModal={openModal} />
            </StyledLeftSide>
          </StyledScroll>
          <StyledRightSide>
            <TopRatedMovies openModal={openModal} />
            <MostPopularMovies openModal={openModal} />
            <WeekPopularMovies openModal={openModal} />
            {isModalOpen && (
              <div ref={node}>
                <Modal />
              </div>
            )}
          </StyledRightSide>
        </StyledTop>
        <StyledBottom>
          <StyledHeading style={{ marginTop: '100px' }}>{title2}</StyledHeading>
          <StyledBottomSide>
            <WatchedMoviesAndSeries openModal={openModal} />
          </StyledBottomSide>
        </StyledBottom>
      </StyledWhole>
    </MoviesTemplate>
  );
};

export default Movies;
