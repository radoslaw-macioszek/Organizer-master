import React from 'react';
import styled from 'styled-components';

const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;

  position: relative;
`;

const FlipContainer = styled.div`
  perspective: 1000px;
  width: 320px;
  height: 480px;

  ${Flipper} {
    transform-origin: 100% 213.5px;
  }

  &:hover ${Flipper} {
    /* transform: rotateY(180deg); */
    transform: rotateX(-180deg) scale(2);
  }
`;

const Front = styled.div`
  background-color: green;
  width: 320px;
  height: 480px;

  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 2;
`;
const Back = styled.div`
  background-color: red;
  width: 320px;
  height: 480px;

  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
  /* transform: rotateY(180deg); */
  transform: rotateX(180deg);
`;

const FlipAnimation = ({ children }) => {
  return (
    <FlipContainer>
      <Flipper>
        <Front>{children}</Front>
        <Back>{children}</Back>
      </Flipper>
    </FlipContainer>
  );
};

export default FlipAnimation;
