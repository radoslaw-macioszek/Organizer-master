import React from 'react';

import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';

const StyledTopRatedMovies = styled.div`
  display: flex;
  overflow: scroll;
  width: 38vw;
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.grey100};

  height: 28vh;
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;
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
