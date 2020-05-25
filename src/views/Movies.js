import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from '../components/molecules/Modal/Modal';
import withContext from '../hoc/withContext';

import MoviesTemplate from '../templates/MoviesTemplate';
import Heading from '../components/atoms/Heading/Heading';
import MoviesCategoryBar from './Movies/CategoryBar';

import MainColumn from './Movies/MainColumn';
import WatchedMoviesAndSeries from './Movies/WatchedMoviesAndSeries';
import { devices } from '../Devices/devices';

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

  @media ${devices.laptopL} {
    width: 30vw;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.5rem;
  }
`;

const StyledBottomSide = styled(StyledLeftSide)`
  height: 69vh;
  width: 84vw;
  grid-template-columns: repeat(6, 1fr);
  padding: 2rem;

  @media ${devices.laptopL} {
    width: 74vw;
    grid-template-columns: repeat(6, 1fr);
  }
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

const StyledWhole = styled(StyledBottom)``;

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
const Movies = ({ pageContext }) => {
  const topRatedTitle = 'Top rated';
  const mostPopularTitle = 'Most popular';
  const weekPopularTitle = 'Most popular in this week';

  const genre = 'movie';
  const seriesGenre = 'tv';

  const [isModalOpen, setModal] = useState(false);

  const topRatedMovies = useSelector((state) => state.moviesReducer.top);
  const mostPopularMovies = useSelector((state) => state.moviesReducer.popular);
  const weekPopularMovies = useSelector((state) => state.moviesReducer.weekMovie);

  const topRatedSeries = useSelector((state) => state.moviesReducer.topSeries);
  const mostPopularSeries = useSelector((state) => state.moviesReducer.popularSeries);
  const weekPopularSeries = useSelector((state) => state.moviesReducer.weekSeries);

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
            <StyledHeading>{`List of ${pageContext} to watch`}</StyledHeading>
            <StyledLeftSide>
              <MainColumn openModal={openModal} />
            </StyledLeftSide>
          </StyledScroll>
          {pageContext === 'movies' && (
            <StyledRightSide>
              <MoviesCategoryBar
                openModal={openModal}
                type={topRatedMovies}
                title={topRatedTitle}
                genre={genre}
              />
              <MoviesCategoryBar
                openModal={openModal}
                type={mostPopularMovies}
                title={mostPopularTitle}
                genre={genre}
              />
              <MoviesCategoryBar
                openModal={openModal}
                type={weekPopularMovies}
                title={weekPopularTitle}
                genre={genre}
              />
              {isModalOpen && (
                <div ref={node}>
                  <Modal />
                </div>
              )}
            </StyledRightSide>
          )}
          {pageContext === 'series' && (
            <StyledRightSide>
              <MoviesCategoryBar
                openModal={openModal}
                type={topRatedSeries}
                title={topRatedTitle}
                genre={seriesGenre}
              />
              <MoviesCategoryBar
                openModal={openModal}
                type={mostPopularSeries}
                title={mostPopularTitle}
                genre={seriesGenre}
              />
              <MoviesCategoryBar
                openModal={openModal}
                type={weekPopularSeries}
                title={weekPopularTitle}
                genre={seriesGenre}
              />
              {isModalOpen && (
                <div ref={node}>
                  <Modal />
                </div>
              )}
            </StyledRightSide>
          )}
        </StyledTop>
        <StyledBottom>
          <StyledHeading
            style={{ marginTop: '100px' }}
          >{`List of watched ${pageContext}`}</StyledHeading>
          <StyledBottomSide>
            <WatchedMoviesAndSeries openModal={openModal} />
          </StyledBottomSide>
        </StyledBottom>
      </StyledWhole>
    </MoviesTemplate>
  );
};

export default withContext(Movies);
