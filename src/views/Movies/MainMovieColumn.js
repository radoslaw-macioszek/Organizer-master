import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/atoms/Button/Button';

const StyledMovieColumn = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 10px;
`;

const DateInfo = styled.p`
  margin: 0 0 5px 12px;
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
  const check = useSelector((state) => state.moviesReducer.data);

  const image =
    'https://www.ohgizmo.com/wp-content/uploads/2014/11/gifts-for-men-who-love-movies.jpg';

  return check.map((item) => (
    <StyledMovieColumn>
      <DateInfo>Added: 13/12/2019</DateInfo>
      <DateInfo>Watched: 13/12/2019</DateInfo>
      <StyledImage
        src={
          item.poster_path === null ? image : `https://image.tmdb.org/t/p/w500${item.poster_path}`
        }
        alt="book"
      />

      <ButtonsWrapper>
        <Button secondary>Add to Favorite</Button>

        <Button secondary>REMOVE</Button>
      </ButtonsWrapper>
    </StyledMovieColumn>
  ));
};

export default MainMovieColumn;
