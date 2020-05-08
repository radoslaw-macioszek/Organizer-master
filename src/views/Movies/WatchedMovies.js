import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/atoms/Button/Button';
import FlipAnimation from '../../components/molecules/FlipAnimation/FlipAnimation';

const StyledWatchedMovies = styled.div`
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

const StyledFlipAnimation = styled(FlipAnimation)`
  height: 25vh;
  width: 11vw;
  border-radius: 5px;
  margin-top: 5px;
  filter: grayscale(100%);
`;

const WatchedMovies = () => {
  const check = useSelector((state) => state.natReducer.watchedMovies);

  const image =
    'https://www.ohgizmo.com/wp-content/uploads/2014/11/gifts-for-men-who-love-movies.jpg';

  return check.map((item) => (
    <StyledWatchedMovies>
      <DateInfo>Watched: 13/12/2019</DateInfo>
      <FlipAnimation
        id={item.id}
        path={item.path}
        title={item.title}
        rate={item.rate}
        popularity={item.popularity}
        date={item.date}
        name={'movie'}
        watched
      />
      <ButtonsWrapper>
        <Button secondary>Add to Favorite</Button>

        <Button secondary>REMOVE</Button>
      </ButtonsWrapper>
    </StyledWatchedMovies>
  ));
};

export default WatchedMovies;
