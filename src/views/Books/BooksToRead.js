import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import withContext from '../../hoc/withContext';

import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Heading from '../../components/atoms/Heading/Heading';
import Button from '../../components/atoms/Button/Button';

import { removeItem, addToFavorite, addToReaded } from '../../store/NATitems/NATitems.reducer';

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px 12px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

const BookWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  border: 1px solid lightgrey;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-top: 5px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 10px 20px 40px 15px;
  line-height: 1.5;
`;

const StyledHeader = styled.div`
  width: 100%;
  text-align: justify;
  position: relative;
  margin-top: 8px;
`;

const StyledImage = styled.img`
  height: 18vh;
  min-width: 6vw;
  margin-left: 10px;
  border-radius: 2px;
  margin-top: 8px;
`;

const StyledHeading = styled(Heading)`
  margin: 0 20px 8px 10px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.books};
  padding: 20px 0;
  border-radius: 10px 10px 3px 3px;
  text-align: center;
  display: flex;
  color: white;

  justify-content: center;
`;

const BookToRead = ({ pageContext }) => {
  const dispatch = useDispatch();
  const randomImage =
    'https://img.favpng.com/17/8/9/book-cattle-leather-png-favpng-4NxiJw1fkY1X791YDumsrAvvE.jpg';
  const check = useSelector((state) => state.natReducer.books);

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
                <Button onClick={() => dispatch(addToFavorite(title))} secondary>
                  Add to Favorite
                </Button>
                <Button
                  style={{ margin: '5px 0' }}
                  onClick={() => dispatch(addToReaded(title))}
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
