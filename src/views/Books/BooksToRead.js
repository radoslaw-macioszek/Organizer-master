import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import withContext from '../../hoc/withContext';

import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Heading from '../../components/atoms/Heading/Heading';
import Button from '../../components/atoms/Button/Button';
import DateInfo from '../../components/atoms/MovieDate/DateInfo';
import { devices } from '../../Devices/devices';

import { removeItem, addToFavorite, addToReaded } from '../../store/NATitems/NATitems.reducer';

const StyledWrapper = styled.div`
  margin-left: 1rem;
  margin-right: 5rem;

  @media ${devices.laptop} {
    width: 40vw;
  }

  @media ${devices.tablet} {
    width: 60vw;
  }
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
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  padding: 10px 15px;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  width: 12.5rem;
  font-size: 1.2rem;
  border: 1px solid grey;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
    color: white;
  }

  @media ${devices.laptop} {
    margin-left: 5px;
  }

  @media ${devices.mobileL} {
    font-size: 0.9rem;
    padding: 0 8px;
    margin: 0 1px 0 2px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 1rem 1.5rem 4rem;
  line-height: 1.5;
  padding: 5px;
`;

const StyledHeader = styled.div`
  width: 100%;
  text-align: justify;
  position: relative;
  margin-top: 0.8rem;
`;

const StyledImage = styled.img`
  height: 18vh;
  min-width: 8vw;
  margin-left: 1rem;
  border-radius: 0.2rem;
  margin-top: 0.8rem;

  float: left;
  margin: 10px 20px 5px;

  @media ${devices.mobileM} {
    height: 16vh;
    float: none;
    margin: 10px auto;
    display: flex;
  }
`;

const StyledHeading = styled(Heading)`
  padding: 2rem;
  margin: 0 1rem 0.8rem;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.books};
  padding: 2rem 0;
  border-radius: 1rem 1rem 0.3rem 0.3rem;
  text-align: center;
  display: flex;
  color: white;
  justify-content: center;

  @media ${devices.mobileM} {
    font-size: 1.6rem;
  }
`;

const BookToRead = ({ pageContext, actualDate }) => {
  const favorite = 'favoriteBooks';
  const readed = 'readedBooks';
  const dispatch = useDispatch();
  const randomImage =
    'https://img.favpng.com/17/8/9/book-cattle-leather-png-favpng-4NxiJw1fkY1X791YDumsrAvvE.jpg';
  const check = useSelector((state) => state.natReducer.books);
  const favoriteBooksLength = useSelector((state) => state.natReducer.favoriteBooks).length;

  return (
    <>
      {check.map((book) => {
        const { id, title, image, created, description } = book;
        return (
          <StyledWrapper key={id}>
            <DateInfo>Added: {created}</DateInfo>
            <BookWrapper>
              <StyledHeader>
                <StyledHeading>{title}</StyledHeading>
                <StyledImage src={image ? image : randomImage} alt="book" />
                <StyledParagraph>{description}</StyledParagraph>
                <ButtonsWrapper>
                  <StyledButton
                    onClick={() =>
                      dispatch(addToFavorite(title, image, favoriteBooksLength, favorite))
                    }
                    secondary
                  >
                    Add to Favorite
                  </StyledButton>
                  <StyledButton
                    onClick={() => dispatch(addToReaded(title, actualDate, readed))}
                    secondary
                  >
                    Add to Readed
                  </StyledButton>
                  <StyledButton onClick={() => dispatch(removeItem(pageContext, id))} secondary>
                    REMOVE
                  </StyledButton>
                </ButtonsWrapper>
              </StyledHeader>
            </BookWrapper>
          </StyledWrapper>
        );
      })}
    </>
  );
};

export default withContext(BookToRead);
