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
  margin-top: 8px;
  margin-bottom: 40px;
`;

const StyledLabel = styled.label`
  margin: 0 5px 10px 30px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

const StyledPosition = styled.div`
  display: flex;
  margin-bottom: 20px;
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

const StyledReadedHeading = styled(StyledHeading)`
  margin: 0 20px 2px 10px;
  padding-left: 20px;
  width: 100%;
  font-size: 15px;
  justify-content: flex-start;
  border-radius: 10px;
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
  const dispatch = useDispatch();

  return (
    <>
      {check.map((book) => {
        const { id, title } = book;
        return (
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
        );
      })}
    </>
  );
};

export default BooksRead;
