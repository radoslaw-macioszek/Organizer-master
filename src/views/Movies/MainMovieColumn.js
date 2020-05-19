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
  padding-top: 10px;

  height: 35vh;

  &:hover {
    border: 1px solid ${({ theme }) => theme.movies};
  }

  position: relative;
`;

const DateInfo = styled.p`
  margin: 0 0 8px 12px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 10px 0 20px;
`;

const StyledImage = styled.img`
  height: 25vh;
  width: 11vw;
  border-radius: 5px;
  margin-top: 5px;
`;

const StyledToolTip = styled.p`
  text-decoration: line-through;
  background-color: ${({ theme }) => theme.grey200};
  border-radius: 3px;
  margin: 0;

  position: relative;
  backface-visibility: hidden;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.4rem;
    display: block;
    position: absolute;
    background-color: transparent;
    padding: 5px 15px;
    color: transparent;
    border-radius: 3px;
    bottom: 0;
    left: -1.5%;
    transform: scale(0);
    transition: transform ease-out 50ms, bottom ease-out 150ms;
    width: 103%;
    backface-visibility: hidden;
  }

  &:hover::after {
    transform: scale(1);
    background-color: white;
    text-align: center;
    color: black;

    border: 1px solid ${({ theme }) => theme.movies};
    backface-visibility: hidden;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 15px;
  width: 80px;
  height: 20px;
`;

const MainMovieColumn = ({ openModal, pageContext }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  //   const check = useSelector((state) => state.moviesReducer.data);
  const checkMovies = useSelector((state) => state.natReducer.movies);
  const checkSeries = useSelector((state) => state.natReducer.series);

  // looknac!
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

export default withContext(MainMovieColumn);
