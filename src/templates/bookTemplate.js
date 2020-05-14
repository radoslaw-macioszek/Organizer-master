import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import withContext from '../hoc/withContext';

import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledPageHeader = styled.div`
  margin: 25px 0 50px;
  width: 30vw;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  grid-gap: 75px;
  grid-template-rows: repeat(2, 1fr);
  height: 60vh;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledWrapper = styled.div`
  padding: 25px 100px 25px 70px;
  position: relative;
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
        <Input search placeholder="Search" />
        <StyledHeading big as="h1">
          {pageContext}
        </StyledHeading>
        <StyledParagraph>
          {bookCount.length} {pageContext}
        </StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  );
};

export default withContext(BookTemplate);
