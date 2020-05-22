import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { loadMovieDetail } from '../../../store/movies/movies.reducer';

const Flipper = styled.div`
  transition: all 1s;
  transform-style: preserve-3d;

  position: relative;
`;

const FlipContainer = styled.div`
  perspective: 100rem;
  height: 19vh;
  width: 8vw;
  margin-right: 5px;

  &:hover ${Flipper} {
    transform: rotateY(-180deg) scale(1.1) translateX(6%);
    z-index: 999;
  }
`;

const Front = styled.div`
  height: 19vh;
  width: 7.5vw;
  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);

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
  font-size: 1rem;
  margin: 0 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 1.2rem;
  margin: 0;
`;
const StyledDateParagraph = styled.span`
  margin: -5px 1rem 0;
  font-size: 10px;
  padding-top: 0;
`;

const StyledDate = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 0;
`;

const StyledHeader = styled.h6`
  padding: 0 1rem 1rem;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.4;
  margin-bottom: 1.1rem;
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
  height: 19vh;
  width: 7.5vw;
  border-radius: 5px;
`;

const FlipAnimation = ({ id, title, path, rate, popularity, date, openModal, name }) => {
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
  }, [dispatch, movieId, name]);

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

FlipAnimation.propTypes = {
  id: PropTypes.number,
  popularity: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  name: PropTypes.string,
  rate: PropTypes.number,
};

FlipAnimation.defaultProps = {
  id: null,
  popularity: null,
  title: null,
  date: null,
  path: null,
  name: null,
  rate: null,
};

export default FlipAnimation;
