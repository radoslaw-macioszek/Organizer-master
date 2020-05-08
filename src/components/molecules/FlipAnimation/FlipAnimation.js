import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

import { loadMovieDetail } from '../../../store/movies/movies.reducer';

const Flipper = styled.div`
  transition: all 1s;
  transform-style: preserve-3d;

  position: relative;
`;

const FlipContainer = styled.div`
  perspective: 1000px;
  height: 18vh;
  width: 8vw;
  margin-right: 5px;

  &:hover ${Flipper} {
    transform: rotateY(-180deg) scale(1.1) translateX(6%);
    z-index: 999;
  }
`;

const Front = styled.div`
  height: 18vh;
  width: 7.5vw;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);

  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;

  z-index: 2;
`;
const Back = styled(Front)`
  background-color: ${({ theme }) => theme.movies};
  z-index: 1;
  transform: rotateY(180deg);
`;

const StyledParagraph = styled.span`
  font-size: 11px;
  margin: 0 10px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 13px;
  margin: 0 0 2px;
`;
const StyledDateParagraph = styled.span`
  margin: 4px 10px 1px;
  font-size: 11px;
`;

const StyledDate = styled.p`
  text-align: center;
  font-size: 13px;
  margin: 4px 0 2px;
`;

const StyledHeader = styled.h6`
  padding: 0 10px 10px;
  margin-top: 15px;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 0.6px solid ${({ theme }) => theme.grey300LowTransparent};
`;

const StyledCardButton = styled.button`
  background-color: ${({ theme }) => theme.grey100};
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translatex(-50%);
  padding: 3px 6px;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
`;

const StyledImage = styled.img`
  height: 18vh;
  width: 7.5vw;
  border-radius: 5px;
`;
const FlipAnimation = ({ children, id, title, path, rate, popularity, date, openModal, name }) => {
  const dispatch = useDispatch();

  const [movieId, setMovieId] = useState(null);

  const handleClick = (id) => {
    setMovieId(id);
    openModal();
  };

  useEffect(() => {
    if (movieId) {
      dispatch(loadMovieDetail(movieId, name));
    }
  }, [dispatch, movieId]);

  return (
    <FlipContainer>
      <Flipper>
        <Front>
          <StyledImage src={path} />
        </Front>
        <Back>
          <StyledHeader>{title}</StyledHeader>
          <StyledParagraph>
            Average rate:
            <StyledSpan>{rate}</StyledSpan>
          </StyledParagraph>
          <StyledParagraph>
            Popularity:
            <StyledSpan>{popularity}</StyledSpan>
          </StyledParagraph>
          <StyledDateParagraph>
            Release date:
            <StyledDate>{date}</StyledDate>
          </StyledDateParagraph>
          <StyledCardButton onClick={() => handleClick(id)}>see more details</StyledCardButton>
        </Back>
      </Flipper>
    </FlipContainer>
  );
};

export default FlipAnimation;
