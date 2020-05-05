import React, { useState } from 'react';
import styled from 'styled-components';

import withContext from '../hoc/withContext';

import UserPageTemplate from './UserPageTemplate';
import RightSearchBar from '../components/organisms/RightSearchBar/RightSearchBar';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Input from '../components/atoms/Input/Input';

const StyledWrapper = styled.div`
  padding: 25px 100px 25px 70px;
  position: relative;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);

  grid-gap: 15px;
`;

// position fixed, zeby nawet przy scrollowaniu byl w tym samym miejscu
const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 50px;

  position: fixed;
  bottom: 40px;
  right: 40px;

  width: 180px;
  font-size: 1.7rem;
  font-weight: bold;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);

  background-size: 40%;
  z-index: 1000000;
`;

const MoviesTemplate = ({ pageContext, children }) => {
  const [barVisible, setBarVisibility] = useState(false);

  return (
    <UserPageTemplate>
      <>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <RightSearchBar isVisible={barVisible} />
          <StyledButtonIcon onClick={() => setBarVisibility(!barVisible)} activecolor={pageContext}>
            Find new movie!
          </StyledButtonIcon>
          {/* <NewItemBar handleClose={this.handleBarToggle} isVisible={barVisible} /> */}
        </StyledWrapper>
      </>
    </UserPageTemplate>
  );
};

export default withContext(MoviesTemplate);
