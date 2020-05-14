import React from 'react';

import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';

const StyledTopRatedMovies = styled.div`
  display: flex;
  overflow: scroll;
  width: 35vw;
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.movies};

  height: 26.5vh;
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;
  text-align: center;
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
