import React from 'react';

import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import { devices } from '../../../Devices/devices';

const StyledTopRatedMovies = styled.div`
  display: flex;
  overflow: scroll;
  width: 35vw;
  padding: 1.5rem;
  padding-right: 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.movies};

  height: 26.5vh;

  @media ${devices.mobileL} {
    flex-wrap: wrap;
    height: 45vh;
    padding: 1.5rem 0 1.5rem 1rem;
    margin-bottom: 5rem;
    border-top: none;
  }
  @media ${devices.mobileM} {
    margin-bottom: 1rem;
    overflow: hidden;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;
  text-align: center;

  @media ${devices.mobileL} {
    border-bottom: 1px solid ${({ theme }) => theme.movies};
    width: 100%;
    margin-top: 5rem;
  }
`;

const MovieBar = ({ children, page }) => {
  return (
    <div>
      <StyledHeading>{page}</StyledHeading>
      <StyledTopRatedMovies>{children}</StyledTopRatedMovies>
    </div>
  );
};

export default MovieBar;
