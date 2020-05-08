import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/atoms/Button/Button';

import { addToWatched, removeItem } from '../../store/NATitems/NATitems.reducer';

const StyledMovieColumn = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 10px;
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
  margin: 5px 0 20px;
`;

const StyledImage = styled.img`
  height: 25vh;
  width: 11vw;
  border-radius: 5px;
  margin-top: 5px;
`;

const MainMovieColumn = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  console.log(checked);

  //   const check = useSelector((state) => state.moviesReducer.data);
  const check = useSelector((state) => state.natReducer.movies);

  const checking = useSelector((state) => state.natReducer);

  console.log('reducer', checking);

  // looknac!
  const handleChange = (id, title, path) => {
    setChecked(true);
    dispatch(removeItem('movies', id));
    dispatch(addToWatched(id, title, path));
    setChecked(false);
  };

  const image =
    'https://www.ohgizmo.com/wp-content/uploads/2014/11/gifts-for-men-who-love-movies.jpg';

  return check.map((item) => (
    <StyledMovieColumn>
      <DateInfo>Added: 13/12/2019</DateInfo>
      <StyledImage src={item.path === null ? image : item.path} alt="book" />

      <ButtonsWrapper>
        <input
          type="checkbox"
          value={checked}
          id="watched"
          onChange={() => handleChange(item.id, item.title, item.path)}
        />
        <label>Watched</label>

        <Button secondary>REMOVE</Button>
      </ButtonsWrapper>
    </StyledMovieColumn>
  ));
};

export default MainMovieColumn;
