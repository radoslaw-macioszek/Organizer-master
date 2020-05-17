import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ToDoTemplate from '../templates/ToDoTemplate';

const StyledColumn = styled.div`
  border-right: 1px solid ${({ theme }) => theme.grey200};
  border-left: 1px solid ${({ theme }) => theme.grey200};

  text-align: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const StyledHeader = styled.h3`
  font-size: 23px;
  border-bottom: 1px solid grey;
  padding: 15px 0 10px;
  margin-top: 0;
  background-color: ${({ theme }) => theme.todos};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  font-size: 12px;
  margin: 10px 0 0;
`;

const ToDo = () => {
  const todos = useSelector((state) => state.natReducer.todos);
  console.log(todos);
  const arrayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const days = Array(7).fill(0);

  const currentDate = new Date().toLocaleDateString();
  const currentDay = currentDate.toString().slice(0, 2) * 1;
  const currentMonth = currentDate.toString().slice(3, 5) * 1;
  const currentYear = currentDate.toString().slice(6) * 1;
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  return (
    <ToDoTemplate>
      {days.map((column, i) => {
        const day = new Date().getDay();
        let numb = day + i;
        const res = numb > 6 ? numb - 7 : numb;

        const bottomDate =
          currentDay + i > daysInMonth ? currentDay + i - daysInMonth : currentDay + i;

        return (
          <StyledColumn key={i}>
            <StyledHeader>
              {arrayNames[res]}
              <StyledSpan>
                {bottomDate} / {currentMonth} / {currentYear}
              </StyledSpan>
            </StyledHeader>
          </StyledColumn>
        );
      })}
    </ToDoTemplate>
  );
};

export default ToDo;
