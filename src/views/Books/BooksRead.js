import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Stars from '../../components/atoms/Stars/Stars';

import Button from '../../components/atoms/Button/Button';
import Heading from '../../components/atoms/Heading/Heading';

import { removeItem } from '../../store/NATitems/NATitems.reducer';

const StyledHeader = styled.div`
  width: 100%;
  text-align: justify;
  position: relative;
  margin-top: 0.8rem;
  margin-bottom: 4rem;
`;

const StyledLabel = styled.label`
  margin: 0 0.5rem 1rem 3rem;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

const StyledPosition = styled.div`
  display: flex;
  margin-bottom: 2rem;
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

const StyledReadedHeading = styled(StyledHeading)`
  margin: 0 2rem 0.2rem 1rem;
  padding-left: 2rem;
  width: 100%;
  font-size: 1.5rem;
  justify-content: flex-start;
  border-radius: 1rem;
  position: relative;

  &::after {
    content: '';
    border: 1px solid white;
    border-radius: 1rem;
    width: 104%;
    height: 90%;
    z-index: 9999;
    position: absolute;
    left: -2%;
    top: 5%;
    transform: scale(0.95);
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 23px;
  right: 8px;
  width: 25px;
  height: 23px;
`;

const BooksRead = () => {
  const readedBooks = 'readedBooks';

  const check = useSelector((state) => state.natReducer.readedBooks);
  check.sort((a, b) => (b.readed > a.readed ? 1 : -1));
  const dispatch = useDispatch();

  return (
    <>
      {check.map((book) => {
        const { id, title, readed } = book;
        return (
          <StyledHeader key={id}>
            <StyledLabel>
              Rate this book:
              <div style={{ margin: '0 50px 0 5px' }}>
                <Stars />
              </div>
              {`Readed: ${readed}`}
            </StyledLabel>
            <StyledPosition>
              <StyledReadedHeading>{title}</StyledReadedHeading>
              <StyledButton onClick={() => dispatch(removeItem(readedBooks, id))} secondary>
                x
              </StyledButton>
            </StyledPosition>
          </StyledHeader>
        );
      })}
    </>
  );
};

export default BooksRead;
