import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { removeItem, addPosition } from '../../store/NATitems/NATitems.reducer';

import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import Heading from '../../components/atoms/Heading/Heading';
import FavoriteBookHeading from '../../components/atoms/Heading/FavoriteBookHeading';

import { devices } from '../../Devices/devices';

const StyledHeader = styled.div`
  text-align: justify;
  position: relative;
`;

const StyledLabel = styled.p`
  margin: 0.3rem 0 0.7rem;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  padding: 0.2rem 0 0.3rem 1.4rem;
  font-size: 1.4rem;
  border-radius: 0.7rem;
  width: 4vw;
  border: 1px solid #8080802e;
  box-shadow: 0.2rem -0.2rem 0px #0000002b;
  background-color: transparent;
  margin-right: 1rem;
  outline: none;

  @media ${devices.tablet} {
    width: 10vw;
    margin-right: 0.5rem;
  }
`;

const StyledSubmit = styled.button`
  font-size: 1rem;
  background-color: hsl(0, 0%, 96%);
  padding: 0.3rem 0.5rem 0.2rem;
  margin-left: -1.7rem;
  color: black;
  font-weight: bold;
  border-radius: 0.8rem;
  outline: none;
`;

const StyledPosition = styled.div`
  display: flex;
  margin-bottom: 2rem;
  position: relative;

  @media ${devices.tablet} {
    margin-bottom: 6rem;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0.7rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.3rem;
`;

const StyledHeading = styled(Heading)`
  font-size: 3rem;
  color: white;
  border-radius: 5rem;
  padding: 0.5rem 1.5rem;

  margin: 0;
  justify-content: center;
  position: absolute;
  left: 0.3rem;
  bottom: 0.3rem;
  background-color: hsla(360, 73%, 60%, 0.5);
  border: 0.2rem solid white;

  transition: all 0.4s ease-out;
`;

const StyledFavoriteHeading = styled(FavoriteBookHeading)`
  &:hover ${StyledHeading} {
    background-color: hsla(360, 73%, 60%, 1);
    left: -4.5rem;
    z-index: 9999;
  }

  @media ${devices.mobileL} {
    margin: 1.5rem 0.5rem 1rem 1.5rem;
  }
`;

const StyledImage = styled.img`
  height: 14vh;
  min-width: 5vw;
  margin: 0.5rem 1rem;
  border-radius: 2px;
  margin-top: 0.8rem;

  @media ${devices.tablet} {
    height: 13vh;
  }

  @media ${devices.mobileL} {
    height: 12vh;
  }
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
      dispatch(addPosition(ajdi, value, favoriteBooks));
    }
  }, [dispatch, value, ajdi]);

  return (
    <>
      {check
        ? sortedFavoriteBooks.map((book, i) => {
            const { id, title, position, image } = book;
            return (
              <StyledHeader key={id}>
                <StyledPosition>
                  <div>
                    <StyledFavoriteHeading data-tool-tip={title}>
                      <StyledHeading>{position}</StyledHeading>
                      <StyledImage src={image ? image : randomImage} alt="book" />
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
