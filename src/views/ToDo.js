import React from 'react';
import styled from 'styled-components';
import ToDoTemplate from '../templates/ToDoTemplate';

const StyledColumn = styled.div`
  border-right: 1px solid ${({ theme }) => theme.grey200};
  border-left: 1px solid ${({ theme }) => theme.grey200};

  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledHeader = styled.h3`
  font-size: 23px;
  border-bottom: 1px solid grey;
  padding: 15px 0 10px;
  margin-top: 0;
  background-color: ${({ theme }) => theme.todos};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  font-size: 12px;
  margin: 10px 0 0;
`;

const ToDo = () => {
  return (
    <ToDoTemplate>
      <StyledColumn>
        <StyledHeader>
          Monday
          <StyledSpan>13 / 12 / 2019</StyledSpan>
        </StyledHeader>
      </StyledColumn>
      <StyledColumn>
        <StyledHeader>
          Tuesday
          <StyledSpan>14 / 12 / 2019</StyledSpan>
        </StyledHeader>
      </StyledColumn>
      <StyledColumn>
        <StyledHeader>
          Wednesday
          <StyledSpan>15 / 12 / 2019</StyledSpan>
        </StyledHeader>
      </StyledColumn>
      <StyledColumn>
        <StyledHeader>
          Thursday
          <StyledSpan>16 / 12 / 2019</StyledSpan>
        </StyledHeader>
      </StyledColumn>
      <StyledColumn>
        <StyledHeader>
          Friday
          <StyledSpan>17 / 12 / 2019</StyledSpan>
        </StyledHeader>
      </StyledColumn>
      <StyledColumn>
        <StyledHeader>
          Saturday
          <StyledSpan>18 / 12 / 2019</StyledSpan>
        </StyledHeader>
      </StyledColumn>
      <StyledColumn>
        <StyledHeader>
          Sunday
          <StyledSpan>13 / 12 / 2019</StyledSpan>
        </StyledHeader>
      </StyledColumn>
    </ToDoTemplate>
  );
};

export default ToDo;
