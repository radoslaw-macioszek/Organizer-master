import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import withContext from '../../hoc/withContext';

import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Heading from '../../components/atoms/Heading/Heading';
import Button from '../../components/atoms/Button/Button';

import { removeItem, addToFavorite, addToReaded } from '../../store/NATitems/NATitems.reducer';

const DateInfo = styled(Paragraph)`
  margin: 0 0 0.5rem 1.2rem;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

const BookWrapper = styled.div`
  display: flex;
  margin-bottom: 5rem;
  box-shadow: 1rem 1.5rem 2rem rgba(0, 0, 0, 0.16);
  border-radius: 1rem;
  border: 1px solid lightgrey;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-top: 0.5rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 1rem 2rem 4rem 1.5rem;
  line-height: 1.5;
`;

const StyledHeader = styled.div`
  width: 100%;
  text-align: justify;
  position: relative;
  margin-top: 0.8rem;
`;

const StyledImage = styled.img`
  height: 18vh;
  min-width: 6vw;
  margin-left: 1rem;
  border-radius: 0.2rem;
  margin-top: 0.8rem;
`;

const StyledHeading = styled(Heading)`
  margin: 0 2rem 0.8rem 1rem;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.books};
  padding: 2rem 0;
  border-radius: 1rem 1rem 0.3rem 0.3rem;
  text-align: center;
  display: flex;
  color: white;

  justify-content: center;
`;

const BookToRead = ({ pageContext, actualDate }) => {
  const dispatch = useDispatch();
  const randomImage =
    'https://img.favpng.com/17/8/9/book-cattle-leather-png-favpng-4NxiJw1fkY1X791YDumsrAvvE.jpg';
  const check = useSelector((state) => state.natReducer.books);
  const favoriteBooksLength = useSelector((state) => state.natReducer.favoriteBooks).length;
  console.log(favoriteBooksLength);

  return (
    <>
      {check.map((book) => {
        const { id, title, image, created, description } = book;
        return (
          <div key={id}>
            <DateInfo>Added: {created}</DateInfo>
            <BookWrapper>
              <StyledImage src={image ? image : randomImage} alt="book" />

              <StyledHeader>
                <StyledHeading>{title}</StyledHeading>
                <StyledParagraph>{description}</StyledParagraph>
              </StyledHeader>

              <ButtonsWrapper>
                <Button
                  onClick={() => dispatch(addToFavorite(title, image, favoriteBooksLength))}
                  secondary
                >
                  Add to Favorite
                </Button>
                <Button
                  style={{ margin: '5px 0' }}
                  onClick={() => dispatch(addToReaded(title, actualDate))}
                  secondary
                >
                  Add to Readed
                </Button>
                <Button onClick={() => dispatch(removeItem(pageContext, id))} secondary>
                  REMOVE
                </Button>
              </ButtonsWrapper>
            </BookWrapper>
          </div>
        );
      })}
    </>
  );
};

export default withContext(BookToRead);
