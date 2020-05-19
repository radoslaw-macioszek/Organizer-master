import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  position: relative;
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

const StyledDoneContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 14vh;
  width: 55%;
  border: 3px solid ${({ theme }) => theme.todos};
  border-radius: 10px;

  overflow: scroll;
`;

const StyledP = styled.p`
  position: absolute;
  bottom: 100%;
  left: 45%;
  margin-bottom: 5px;
  margin-top: 0;
  font-weight: bold;
`;

const StyledDate = styled.span`
  margin-right: 5px;
`;

const StyledTitle = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const StyledDone = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const StyledFont = styled.div`
  font-size: 14px;
`;

const ToDoTemplate = ({ children, pageContext }) => {
  const done = useSelector((state) => state.natReducer.done);
  done.sort((a, b) => (a.fullDate > b.fullDate ? 1 : -1));

  const [barVisible, setBarVisibility] = useState(false);
  const todoLength = useSelector((state) => state.natReducer.todos);

  return (
    <UserPageTemplate>
      <>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledP>Recently comleted</StyledP>
            <StyledDoneContainer>
              {done &&
                done.map((item) => (
                  <div key={item.id}>
                    <StyledDone>
                      <StyledFont>
                        <StyledDate>{item.date}</StyledDate>
                        <StyledDate>{item.fullDate}</StyledDate>
                      </StyledFont>
                      <div>
                        <StyledTitle>{item.title}</StyledTitle>
                        {item.content}
                      </div>
                    </StyledDone>
                  </div>
                ))}
            </StyledDoneContainer>
            <StyledParagraph>{`${todoLength.length} ${pageContext}`}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <NewItemBar isVisible={barVisible}>{/* <SearchedMovies /> */}</NewItemBar>
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
