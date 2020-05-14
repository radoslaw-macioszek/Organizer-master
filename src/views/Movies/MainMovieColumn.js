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
  const handleChange = (id, title, path, changeType) => {
    setChecked(true);
    dispatch(removeItem(changeType, id));
    dispatch(addToWatched(id, title, path));
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
          <StyledImage
            src={item.path === null ? image : item.path}
            alt="book"
            onClick={() => handleClick(item.id, 'movie')}
          />

          <ButtonsWrapper>
            <input
              type="checkbox"
              value={checked}
              id="watched"
              onChange={() => handleChange(item.id, item.title, item.path, 'movies')}
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
          <StyledImage
            src={item.path === null ? image : item.path}
            alt="book"
            onClick={() => handleClick(item.id, 'tv')}
          />

          <ButtonsWrapper>
            <input
              type="checkbox"
              value={checked}
              id="watched"
              onChange={() => handleChange(item.id, item.title, item.path, 'series')}
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
