import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { removeItem, addPosition } from '../../store/NATitems/NATitems.reducer';

import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import Heading from '../../components/atoms/Heading/Heading';

const StyledHeader = styled.div`
  text-align: justify;
  position: relative;
`;

const StyledLabel = styled.p`
  margin: 3px 0 7px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 11px;
  display: inline-flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  padding: 2px 0 3px 14px;
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
  border-radius: 8px;
  outline: none;
`;

const StyledPosition = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 7px;
  right: 10px;
  width: 25px;
  height: 23px;
`;

const StyledHeading = styled(Heading)`
  font-size: 4rem;
  color: white;
  border-radius: 50px;
  padding: 5px 10px;

  margin: 0;
  justify-content: center;
  position: absolute;
  left: 3px;
  bottom: 3px;
  background-color: hsla(360, 73%, 60%, 0.5);
  border: 2px solid white;
`;

const StyledFavoriteHeading = styled.div`
  margin: 10px 20px;
  border-radius: 10px 10px 3px 3px;
  background-color: white;
  border-left: 1px solid hsla(360, 73%, 50%);
  border-right: 5px solid hsla(360, 73%, 50%);
  border-bottom: 1px solid hsla(360, 73%, 50%);
  border-top: 16px solid hsla(360, 73%, 50%);
  color: black;
  position: relative;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.4rem;
    font-weight: bold;
    display: block;
    position: absolute;
    background-color: hsla(360, 73%, 60%, 0.5);
    padding: 5px 15px;
    color: white;
    border-radius: 3px;
    top: 3%;
    left: 0;
    transform: scale(0);
    transition: transform ease-out 150ms, bottom ease-out 150ms;
  }

  &:hover::after {
    transform: scale(1);
    top: 3%;
    width: 100%;
    text-align: center;
  }
`;

const StyledImage = styled.img`
  height: 12vh;
  min-width: 5vw;
  margin: 5px 10px;
  border-radius: 2px;
  margin-top: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

const StyledPositionChanger = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const BooksFavorite = () => {
  const favoriteBooks = 'favoriteBooks';
  const randomImage =
    'https://img.favpng.com/17/8/9/book-cattle-leather-png-favpng-4NxiJw1fkY1X791YDumsrAvvE.jpg';

  const check = useSelector((state) => state.natReducer.favoriteBooks);
  const sortedFavoriteBooks = check.sort((a, b) => a.position - b.position);
  const [rankingValue, setRankingValue] = useState(null);
  const [value, setValue] = useState(null);
  const [ajdi, setAjdi] = useState(null);

  const dispatch = useDispatch();

  const handleClick = (rankingValue, id) => {
    setValue(rankingValue);
    setAjdi(id);
  };

  const handleChange = (event) => {
    setRankingValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (value !== null) {
      dispatch(addPosition(ajdi, value));
    }
  }, [dispatch, value, ajdi]);

  return (
    <>
      {check
        ? sortedFavoriteBooks.map((book, i) => {
            const { id, title, position } = book;
            return (
              <StyledHeader>
                <StyledPosition>
                  <div>
                    <StyledFavoriteHeading data-tool-tip={title}>
                      <StyledHeading>{position}.</StyledHeading>
                      <StyledImage src={randomImage} alt="book" />
                    </StyledFavoriteHeading>
                  </div>
                  <StyledForm onSubmit={handleSubmit}>
                    <StyledLabel>Set ranking position: </StyledLabel>
                    <StyledPositionChanger>
                      <StyledInput
                        type="number"
                        name="quantity"
                        min="1"
                        max={check.length}
                        onChange={handleChange}
                      />
                      <StyledSubmit onClick={() => handleClick(rankingValue, id)}>
                        change!
                      </StyledSubmit>
                    </StyledPositionChanger>
                  </StyledForm>
                  <StyledButton onClick={() => dispatch(removeItem(favoriteBooks, id))} secondary>
                    x
                  </StyledButton>
                </StyledPosition>
              </StyledHeader>
            );
          })
        : ' '}
    </>
  );
};

export default BooksFavorite;
