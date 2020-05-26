import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { devices } from '../../../Devices/devices';

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

    @media ${devices.laptop} {
      transform: rotateY(-180deg) scale(1) translateX(0%);
    }

    @media ${devices.tablet} {
      transform: rotateY(-180deg) scale(1.1) translateX(-1%);
    }

    @media ${devices.mobileL} {
      transform: rotateY(-180deg) scale(1.1) translateX(-15%);
    }
  }

  @media ${devices.laptop} {
    width: 15vw;
    margin-right: 10px;
  }

  @media ${devices.mobileL} {
    width: 20vw;
    margin-right: 30px;
  }

  @media ${devices.mobileM} {
    width: 22vw;
    margin-right: 22px;
  }

  @media ${devices.mobileS} {
    width: 22vw;

    margin-right: 20px;
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

  @media ${devices.laptop} {
    width: 15vw;
  }

  @media ${devices.mobileL} {
    width: 23vw;
  }

  @media ${devices.mobileM} {
    width: 25vw;
  }
`;
const Back = styled(Front)`
  background-color: ${({ theme }) => theme.movies};
  z-index: 1;
  transform: rotateY(180deg);

  @media ${devices.laptop} {
    width: 15vw;
  }

  @media ${devices.mobileL} {
    width: 23vw;
    height: 18vh;
  }

  @media ${devices.mobileM} {
    width: 25vw;
  }
`;

const StyledParagraph = styled.span`
  font-size: 1rem;
  margin: 0 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tablet} {
    display: none;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.2rem;
  margin: 0;
`;
const StyledDateParagraph = styled.span`
  margin: -5px 1rem 0;
  font-size: 10px;
  padding-top: 0;

  @media ${devices.tablet} {
    display: none;
  }
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
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);

  background-color: ${({ theme }) => theme.grey100};
  padding: 8px 10px;
  font-size: 1rem;
  border: 1px solid lightgray;
`;

const StyledImage = styled.img`
  height: 19vh;
  width: 7.5vw;
  border-radius: 5px;

  @media ${devices.laptop} {
    width: 15vw;
  }
  @media ${devices.mobileL} {
    width: 24vw;
  }

  @media ${devices.mobileM} {
    width: 25vw;
  }
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
