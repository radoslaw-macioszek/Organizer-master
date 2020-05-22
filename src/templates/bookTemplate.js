import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import withContext from '../hoc/withContext';

import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledPageHeader = styled.div`
  margin: 2.5rem 0 5rem;
  width: 30vw;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  grid-gap: 7.5rem;
  height: 60vh;
`;

const StyledHeading = styled(Heading)`
  margin: 2.5rem 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledWrapper = styled.div`
  padding: 2.5rem 10rem 2.5rem 7rem;
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
