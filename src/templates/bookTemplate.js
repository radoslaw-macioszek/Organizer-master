import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import withContext from '../hoc/withContext';

import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

import { devices } from '../Devices/devices';

const StyledPageHeader = styled.div`
  margin: 0 0 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    margin: 0;
    width: 90%;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.5fr;
  grid-gap: 7.5rem;
  height: 60vh;

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 2.5rem 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledWrapper = styled.div`
  padding: 0 0 0 3.5rem;
  position: relative;

  @media ${devices.laptop} {
    padding: 0;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const BookTemplate = ({ pageContext, children }) => {
  const bookCount = useSelector((state) => state.natReducer.books);

  return (
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {pageContext}
        </StyledHeading>
        <StyledParagraph>
          {bookCount.length} {pageContext}
        </StyledParagraph>
        <Input search placeholder="Search" />
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  );
};

export default withContext(BookTemplate);
