import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import withContext from '../../hoc/withContext';

import Button from '../../components/atoms/Button/Button';
import MovieToolTip from '../../components/molecules/ToolTip/MovieToolTip';
import DateInfo from '../../components/atoms/MovieDate/DateInfo';

import { loadMovieDetail } from '../../store/movies/movies.reducer';
import { removeItem } from '../../store/NATitems/NATitems.reducer';
import { devices } from '../../Devices/devices';

const StyledWatchedMovies = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;

  align-items: center;
  padding-top: 1rem;
  margin-bottom: 4rem;
  filter: grayscale(100%);
  transition: all 2s ease;

  &:hover {
    filter: none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 2rem;
  width: 90%;
`;

const StyledTopButtons = styled.div`
  display: flex;

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  background-color: white;
  color: ${({ theme }) => theme.movies};
  font-size: 1rem;
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

  @media ${devices.tablet} {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 2rem;
    }
  }

  @media ${devices.mobileL} {
    font-size: 0.8rem;
  }
`;

const Front = styled.div`
  height: 21vh;
  width: 9vw;
  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  transition: all 0.8s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.2);
    backface-visibility: hidden;
    z-index: 93290909;
  }
  @media ${devices.laptop} {
    width: 15vw;
  }

  @media ${devices.tablet} {
    width: 26vw;
  }
`;

const StyledImage = styled.img`
  height: 21vh;
  width: 102%;
  border-radius: 0.5rem;
  backface-visibility: hidden;
`;

const StyledToolTip = styled(MovieToolTip)`
  &::after {
    content: attr(data-tool-tip);
    font-size: 1.2rem;
    background-color: transparent;
    bottom: 5%;
    transition: transform ease 0.7s, bottom ease-out 150ms;
    backface-visibility: hidden;
  }

  &:hover::after {
    width: 102%;
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
                Details
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
                Details
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
