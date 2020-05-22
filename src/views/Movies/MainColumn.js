import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import withContext from '../../hoc/withContext';

import Button from '../../components/atoms/Button/Button';

import { addToWatched, removeItem } from '../../store/NATitems/NATitems.reducer';
import { loadMovieDetail } from '../../store/movies/movies.reducer';

const StyledMovieColumn = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 1rem;

  height: 35vh;

  &:hover {
    border: 1px solid ${({ theme }) => theme.movies};
  }

  position: relative;
`;

const DateInfo = styled.p`
  margin: 0 0 0.8rem 1.2rem;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 1rem 0 2rem;
`;

const StyledImage = styled.img`
  height: 25vh;
  width: 11vw;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const StyledToolTip = styled.p`
  background-color: hsl(0, 0%, 0%, 0.4);
  border-radius: 3px;
  margin: 0;

  position: relative;
  backface-visibility: hidden;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.5rem;
    display: block;
    position: absolute;
    padding: 0.5rem 1.5rem;
    color: transparent;
    border-radius: 3px;
    bottom: 0;
    left: 0;
    transform: scale(0);
    transition: transform ease-out 0, bottom ease-out 150ms;
    width: 100%;
    backface-visibility: hidden;
  }

  &:hover::after {
    transform: scale(1);
    background-color: hsl(0, 0%, 0%, 0.4);
    text-align: center;
    color: white;

    border: 1px solid ${({ theme }) => theme.movies};
    backface-visibility: hidden;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 1.5rem;
  width: 8rem;
  height: 2rem;
`;

const MainColumn = ({ openModal, pageContext }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const checkMovies = useSelector((state) => state.natReducer.movies);
  const checkSeries = useSelector((state) => state.natReducer.series);

  const handleChange = (id, title, path, changeType, watched) => {
    setChecked(true);
    dispatch(removeItem(changeType, id));
    dispatch(addToWatched(id, title, path, watched));
    setChecked(false);
  };

  //

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

  //

  const image =
    'https://www.ohgizmo.com/wp-content/uploads/2014/11/gifts-for-men-who-love-movies.jpg';

  return pageContext === 'movies'
    ? checkMovies.map((item) => (
        <StyledMovieColumn key={item.id}>
          <DateInfo>Added: 13/12/2019</DateInfo>
          <StyledToolTip data-tool-tip={item.title}>
            <StyledImage
              src={item.path === null ? image : item.path}
              alt="book"
              onClick={() => handleClick(item.id, 'movie')}
            />
          </StyledToolTip>
          <ButtonsWrapper>
            <input
              type="checkbox"
              value={checked}
              id="watched"
              onChange={() =>
                handleChange(item.id, item.title, item.path, 'movies', 'watchedMovies')
              }
            />
            <label>Watched</label>

            <StyledButton secondary onClick={() => dispatch(removeItem('movies', item.id))}>
              REMOVE
            </StyledButton>
          </ButtonsWrapper>
        </StyledMovieColumn>
      ))
    : checkSeries.map((item) => (
        <StyledMovieColumn key={item.id}>
          <DateInfo>Added: 13/12/2019</DateInfo>
          <StyledToolTip data-tool-tip={item.title}>
            <StyledImage
              src={item.path === null ? image : item.path}
              alt="book"
              onClick={() => handleClick(item.id, 'tv')}
            />
          </StyledToolTip>

          <ButtonsWrapper>
            <input
              type="checkbox"
              value={checked}
              id="watched"
              onChange={() =>
                handleChange(item.id, item.title, item.path, 'series', 'watchedSeries')
              }
            />
            <label>Watched</label>

            <StyledButton secondary onClick={() => dispatch(removeItem('series', item.id))}>
              REMOVE
            </StyledButton>
          </ButtonsWrapper>
        </StyledMovieColumn>
      ));
};

export default withContext(MainColumn);
