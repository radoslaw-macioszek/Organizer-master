import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import Button from '../../components/atoms/Button/Button';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import withContext from '../../hoc/withContext';
import Input from '../../components/atoms/Input/Input';

import Stars from '../../components/atoms/Stars/Stars';
import { FiCheck } from 'react-icons/fi';

import {
  removeItem,
  addToFavorite,
  addPosition,
  addToReaded,
} from '../../store/NATitems/NATitems.reducer';

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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
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

  justify-content: center;
`;

const StyledFavoriteHeading = styled(StyledHeading)`
  width: 100%;
  padding-left: 20px;
  font-size: 18px;
  background-color: white;
  border-left: 1px solid hsla(360, 73%, 50%);
  border-right: 5px solid hsla(360, 73%, 50%);
  border-bottom: 1px solid hsla(360, 73%, 50%);
  border-top: 16px solid hsla(360, 73%, 50%);
  color: black;
`;

const StyledReadedHeading = styled(StyledHeading)`
  margin: 0 20px 2px 10px;
  padding-left: 20px;
  width: 100%;
  font-size: 15px;
  justify-content: flex-start;
  border-radius: 10px;
`;

const StyledPosition = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 23px;
  right: 8px;
  width: 25px;
  height: 23px;
`;

const StyledLabel = styled.label`
  margin: 0 5px 10px 30px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  padding: 2px 8px;
  font-size: 1.4rem;
  border-radius: 7px;
  width: 3vw;
  border: 1px solid #8080802e;
  box-shadow: 2px -2px 0px #0000002b;
  background-color: transparent;
  margin-right: 10px;
  outline: none;
`;

const StyledSubmit = styled.button`
  font-size: 10px;
  background-color: hsl(0, 0%, 96%);
  padding: 3px 5px 2px;
  margin-left: -17px;
  color: black;
  font-weight: bold;
  text-align: center;
  box-shadow: none;
  border-radius: 8px;
  outline: none;
`;

const Book = ({ title, description, created, id, pageContext, image, cardType, rankPosition }) => {
  const dispatch = useDispatch();
  const randomImage =
    'https://img.favpng.com/17/8/9/book-cattle-leather-png-favpng-4NxiJw1fkY1X791YDumsrAvvE.jpg';
  const FavBooks = useSelector((state) => state.natReducer.favoriteBooks);
  const [rankingValue, setRankingValue] = useState(null);
  const [value, setValue] = useState(null);

  const favoriteBooks = 'favoriteBooks';
  const readedBooks = 'readedBooks';

  const handleChange = (event) => {
    setRankingValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (value !== null) {
      dispatch(addPosition(id, value));
    }
  }, [dispatch, value, id]);

  return (
    <div>
      {cardType === 'books' ? (
        <div>
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
      ) : cardType === 'favoriteBooks' ? (
        <StyledHeader>
          <form onSubmit={handleSubmit}>
            <StyledLabel htmlFor="quantity">Set ranking position: </StyledLabel>
            <StyledInput
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={FavBooks.length}
              onChange={handleChange}
            />
            <StyledSubmit>
              <FiCheck size={15} onClick={() => setValue(rankingValue)} />
            </StyledSubmit>
          </form>

          <StyledPosition>
            <div style={{ fontSize: '21px' }}>{rankPosition}.</div>
            <StyledFavoriteHeading>{title}</StyledFavoriteHeading>
            <StyledButton onClick={() => dispatch(removeItem(favoriteBooks, id))} secondary>
              x
            </StyledButton>
          </StyledPosition>
        </StyledHeader>
      ) : (
        <StyledHeader>
          <StyledLabel>
            Rate this book:
            <div style={{ marginLeft: '5px' }}>
              <Stars />
            </div>
          </StyledLabel>
          <StyledPosition>
            <StyledReadedHeading>{title}</StyledReadedHeading>
            <StyledButton onClick={() => dispatch(removeItem(readedBooks, id))} secondary>
              x
            </StyledButton>
          </StyledPosition>
        </StyledHeader>
      )}
    </div>
  );
};

export default withContext(Book);
