import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import withContext from '../../hoc/withContext';

import Button from '../../components/atoms/Button/Button';
import MovieToolTip from '../../components/molecules/ToolTip/MovieToolTip';
import DateInfo from '../../components/atoms/MovieDate/DateInfo';

import { addToWatched, removeItem } from '../../store/NATitems/NATitems.reducer';
import { loadMovieDetail } from '../../store/movies/movies.reducer';
import { devices } from '../../Devices/devices';

const StyledMovieColumn = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 1rem;

  height: 37vh;

  &:hover {
    border: 1px solid ${({ theme }) => theme.movies};
    border-radius: 5px;
  }

  position: relative;

  @media ${devices.tablet} {
    width: 34vw;
  }
`;

const StyledDateInfo = styled(DateInfo)`
  margin: 0 0 0.8rem 1.2rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 1rem 0 2rem;
  font-size: 1.3rem;
  align-items: center;
  cursor: pointer;

  @media ${devices.tablet} {
    flex-flow: wrap;
    justify-content: center;
  }
`;

const StyledImage = styled.img`
  height: 25vh;
  width: 11vw;
  border-radius: 0.5rem;
  margin-top: 0.5rem;

  @media ${devices.laptop} {
    width: 20vw;
  }

  @media ${devices.mobileL} {
    width: 30vw;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 1.5rem;
  width: 8rem;
  height: 2rem;
  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.movies};
    color: white;
  }

  @media ${devices.tablet} {
    margin-top: 0.8rem;
  }
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

  const handleClick = (id, category) => {
    setMovieId(id);
    setType(category);
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
          <StyledDateInfo>Added: 13/12/2019</StyledDateInfo>
          <MovieToolTip data-tool-tip={item.title}>
            <StyledImage
              src={item.path === null ? image : item.path}
              alt="book"
              onClick={() => handleClick(item.id, 'movie')}
            />
          </MovieToolTip>
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
          <StyledDateInfo>Added: 13/12/2019</StyledDateInfo>
          <MovieToolTip data-tool-tip={item.title}>
            <StyledImage
              src={item.path === null ? image : item.path}
              alt="book"
              onClick={() => handleClick(item.id, 'tv')}
            />
          </MovieToolTip>

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
