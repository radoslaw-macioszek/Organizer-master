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
import plusIcon from '../assets/icons/plus.svg';
import ToDoDone from '../components/molecules/ToDoDone/ToDoDone';

import { devices } from '../Devices/devices';

const StyledWrapper = styled.div`
  padding: 2.5rem 3rem 2.5rem;
  position: relative;

  @media ${devices.laptop} {
    padding: 0;
    margin-left: 0;
    margin-right: 4rem;
  }

  @media ${devices.mobileL} {
    margin-right: 1rem;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 2.5rem 0 0;

  ::first-letter {
    text-transform: uppercase;
  }

  @media ${devices.tablet} {
    width: 100%;
    text-align: center;
  }

  width: 40%;
  text-align: center;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};

  @media ${devices.tablet} {
    width: 100%;
    text-align: center;
  }

  width: 40%;
  text-align: center;
`;

const StyledPageHeader = styled.div`
  margin: 2.5rem 0 5rem;
  position: relative;

  @media ${devices.tablet} {
    margin: 2.5rem 0 18rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2px;
  height: 100vh;

  @media ${devices.laptop} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 5rem;

  position: fixed;
  bottom: 4rem;
  right: 4rem;

  background-size: 40%;
  z-index: 1000000;

  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);
`;

const StyledP = styled.p`
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 100%;
  left: 45%;
  margin-bottom: 0.5rem;
  margin: 0;
  font-weight: bold;
  align-items: center;

  @media ${devices.laptop} {
    bottom: 78%;
  }

  @media ${devices.tablet} {
    bottom: -30%;
    width: 100%;
    left: 0;
  }

  @media ${devices.mobileL} {
    bottom: -20%;
  }

  @media ${devices.mobileM} {
    bottom: -25%;
  }
`;

const StyledSpan = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.grey300};

  margin-left: 1.5rem;
  text-align: center;
  width: 100%;
  margin-bottom: 5px;

  @media ${devices.mobileL} {
    display: none;
  }
`;

const StyledContainerName = styled.span`
  width: 75%;
  margin-bottom: -1rem;

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const ToDoTemplate = ({ children, pageContext }) => {
  const [barVisible, setBarVisibility] = useState(false);
  const todoLength = useSelector((state) => state.natReducer.todos);

  return (
    <UserPageTemplate>
      <>
        <StyledWrapper>
          <StyledPageHeader>
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledP>
              <StyledContainerName>Recently comleted</StyledContainerName>
              <StyledSpan>(here you can see all the tasks you have done)</StyledSpan>
            </StyledP>

            <ToDoDone />
            <StyledParagraph>{`${todoLength.length} ${pageContext}`}</StyledParagraph>
            <Input search placeholder="Search" />
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <NewItemBar isVisible={barVisible} />
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
