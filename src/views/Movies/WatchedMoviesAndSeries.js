import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import withContext from '../../hoc/withContext';

import Button from '../../components/atoms/Button/Button';
import { loadMovieDetail } from '../../store/movies/movies.reducer';
import { removeItem } from '../../store/NATitems/NATitems.reducer';

const StyledWatchedMovies = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;

  align-items: center;
  padding-top: 1rem;
  filter: grayscale(100%);
  transition: all 2s ease;

  &:hover {
    filter: none;
  }
`;

const DateInfo = styled.p`
  margin: 0 0 0.5rem 1.2rem;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 2rem;
  width: 90%;
`;

const StyledTopButtons = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  background-color: white;
  color: ${({ theme }) => theme.movies};
  font-size: 1.1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.movies};
  border-radius: 0.5rem;
  height: 4vh;
  width: 100%;
  margin-right: 5px;
  line-height: 1.3;
  padding: 0.5rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.moviesBold};
    color: ${({ theme }) => theme.moviesBold};
  }
`;

const Front = styled.div`
  height: 21vh;
  width: 9vw;
  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  transition: all 0.8s ease;
  margin-bottom: 2.5rem;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledImage = styled.img`
  height: 21vh;
  width: 9vw;
  border-radius: 0.5rem;
  backface-visibility: hidden;
`;

const StyledToolTip = styled.p`
  text-decoration: line-through;
  background-color: hsl(0, 0%, 0%, 0.4);
  border-radius: 0.3rem;

  position: relative;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.2rem;
    display: block;
    position: absolute;
    background-color: transparent;
    color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 0.3rem;
    bottom: 5%;
    left: 0;
    transform: scale(0);
    transition: transform ease 0.7s, bottom ease-out 150ms;
    backface-visibility: hidden;
  }

  &:hover::after {
    transform: scale(1);
    background-color: hsl(0, 0%, 0%, 0.4);
    text-align: center;
    width: 100%;
    color: white;

    border: 1px solid ${({ theme }) => theme.movies};
  }
`;

const WatchedMoviesAndSeries = ({ openModal, pageContext }) => {
  const dispatch = useDispatch();

  const check = useSelector((state) => state.natReducer.watchedMovies);
  const checkSeries = useSelector((state) => state.natReducer.watchedSeries);

  const [movieId, setMovieId] = useState(null);
  const [type, setType] = useState('movie');

  const handleClick = (id, type) => {
    setMovieId(id);
    setType(type);
    openModal();
  };

  useEffect(() => {
    if (movieId && type === 'movie') {
      dispatch(loadMovieDetail(movieId, type));
    } else if (movieId && type === 'tv') {
      dispatch(loadMovieDetail(movieId, type));
    }
  }, [dispatch, movieId, type]);

  //   const image =
  //     'https://www.ohgizmo.com/wp-content/uploads/2014/11/gifts-for-men-who-love-movies.jpg';

  return pageContext === 'movies'
    ? check.map((item) => (
        <StyledWatchedMovies key={item.id}>
          <DateInfo>Watched: 13/12/2019</DateInfo>

          <Front>
            <StyledToolTip data-tool-tip={item.title}>
              <StyledImage src={item.path} />
            </StyledToolTip>
          </Front>

          <ButtonsWrapper>
            <StyledTopButtons>
              <StyledButton secondary onClick={() => handleClick(item.id, 'movie')}>
                See more details
              </StyledButton>

              <StyledButton
                secondary
                onClick={() => dispatch(removeItem('watchedMovies', item.id))}
              >
                REMOVE
              </StyledButton>
            </StyledTopButtons>
          </ButtonsWrapper>
        </StyledWatchedMovies>
      ))
    : checkSeries.map((item) => (
        <StyledWatchedMovies key={item.id}>
          <DateInfo>Watched: 13/12/2019</DateInfo>

          <Front>
            <StyledToolTip data-tool-tip={item.title}>
              <StyledImage src={item.path} />
            </StyledToolTip>
          </Front>

          <ButtonsWrapper>
            <StyledTopButtons>
              <StyledButton secondary onClick={() => handleClick(item.id, 'tv')}>
                See more details
              </StyledButton>
              <StyledButton
                secondary
                onClick={() => dispatch(removeItem('watchedSeries', item.id))}
              >
                REMOVE
              </StyledButton>
            </StyledTopButtons>
          </ButtonsWrapper>
        </StyledWatchedMovies>
      ));
};

export default withContext(WatchedMoviesAndSeries);
