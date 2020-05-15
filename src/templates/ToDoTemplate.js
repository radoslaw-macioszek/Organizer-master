import React, { useState } from 'react';
import styled from 'styled-components';

import UserPageTemplate from './UserPageTemplate';
import withContext from '../hoc/withContext';

import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Heading from '../components/atoms/Heading/Heading';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Input from '../components/atoms/Input/Input';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';
import SearchedMovies from '../views/Movies/SearchedMovies';
import plusIcon from '../assets/icons/plus.svg';

const StyledWrapper = styled.div`
  padding: 25px 30px 25px;
  margin-left: 40px;
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
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2px;
  height: 100vh;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 50px;

  position: fixed;
  bottom: 40px;
  right: 40px;

  background-size: 40%;
  z-index: 1000000;

  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 25px;
  margin-right: 2px;
  background-color: ${({ theme }) => theme.movies};

  padding: 15px 30px;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.movies};
    border: 1px solid ${({ theme }) => theme.movies};

    background-color: ${({ theme }) => theme.greyTransparent};

    border-bottom: 4px solid ${({ theme }) => theme.movies};
  }
`;

const ToDoTemplate = ({ children, pageContext }) => {
  const [barVisible, setBarVisibility] = useState(false);
  // const todoLength = useSelector((state) => state.natReducer.movies);

  return (
    <UserPageTemplate>
      <>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>
              {/* {`${moviesLength.length} ${pageContext}`} */}
              {`${pageContext}`}
            </StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <NewItemBar isVisible={barVisible}>
            <SearchedMovies />
          </NewItemBar>
          <StyledButtonIcon
            icon={plusIcon}
            onClick={() => setBarVisibility(!barVisible)}
            activecolor={pageContext}
          />
        </StyledWrapper>
      </>
    </UserPageTemplate>
  );
};

export default withContext(ToDoTemplate);
