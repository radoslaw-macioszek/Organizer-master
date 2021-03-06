import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ToDoTemplate from '../templates/ToDoTemplate';

import withContext from '../hoc/withContext';
import { removeItem, addToDone } from '../store/NATitems/NATitems.reducer';
import ToolTip from '../components/molecules/ToolTip/ToolTip';

import { devices } from '../Devices/devices';

const StyledColumn = styled.div`
  border-right: 1px solid ${({ theme }) => theme.grey200};
  border-left: 1px solid ${({ theme }) => theme.grey200};

  text-align: center;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  max-width: 13vw;

  @media ${devices.laptop} {
    max-width: none;
  }
`;

const StyledHeader = styled.h3`
  font-size: 1.8rem;
  border-bottom: 1px solid grey;
  padding: 1.5rem 0 1rem;
  margin-top: 0;
  background-color: ${({ theme }) => theme.todos};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  font-size: 1.2rem;
  margin: 1rem 0 0;
`;

const StyledTime = styled.p`
  font-size: 1.5rem;
  margin: 0 0 0.8rem 0;
  text-align: left;
  text-decoration: underline;
`;

const StyledContent = styled.p`
  text-align: justify;
  padding-bottom: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.grey200};
  word-wrap: break-word;
`;

const StyledTitle = styled.h3`
  margin: 0;
  padding: 0.5rem 0;
  word-wrap: break-word;
`;

const StyledWrapper = styled.div`
  padding: 0 1.5rem;
`;

const StyledButtonWrapper = styled.div`
  margin-bottom: 4rem;
`;

const StyledButton = styled.button`
  border: 1px solid grey;
  border-radius: 3px;
  background-color: white;
  margin: 0.5rem;
`;

const ToDo = ({ actualDate }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeItem('todos', id));
  };

  const handleAdd = (id, title, time, content, type, fullDate) => {
    dispatch(addToDone(id, title, time, content, type, fullDate));
    dispatch(removeItem('todos', id));
  };

  // sort
  const todos = useSelector((state) => state.natReducer.todos);
  todos.sort((a, b) => (a.date > b.date ? 1 : -1));

  // time
  const arrayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const days = Array(7).fill(0);

  const currentDate = new Date().toLocaleDateString();
  const currentDay = currentDate.toString().slice(0, 2) * 1;
  const currentMonth = currentDate.toString().slice(3, 5);
  const currentYear = currentDate.toString().slice(5) * 1;
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  //
  return (
    <ToDoTemplate>
      <>
        {days.map((column, i) => {
          const today = new Date().getDay();
          const numb = today + i;
          const result = numb > 6 ? numb - 7 : numb;
          //
          const bottomHeaderDate =
            currentDay + i > daysInMonth ? currentDay + i - daysInMonth : currentDay + i;

          const fullDayDate = `${
            bottomHeaderDate < 10 ? '0' + bottomHeaderDate : bottomHeaderDate
          }.${currentMonth < 10 ? '0' + currentMonth : currentMonth}${currentYear}`;
          return (
            <StyledColumn key={i}>
              <StyledHeader>
                {arrayNames[result]}
                <StyledSpan>{fullDayDate}</StyledSpan>
              </StyledHeader>
              {todos.map((todo) => {
                const day = todo.date && todo.date.slice(8, 10);
                const month = todo.date && todo.date.slice(5, 7);
                const year = todo.date && todo.date.slice(0, 4);
                const fullDate = `${day}.${month}.${year}`;
                const time = todo.date && todo.date.slice(11, 16);

                const actual = new Date();
                const actualTime =
                  (actual.getHours() < 10 ? '0' + actual.getHours() : actual.getHours()) +
                  ':' +
                  (actual.getMinutes() < 10 ? '0' + actual.getMinutes() : actual.getMinutes());

                return fullDate === fullDayDate ? (
                  <StyledWrapper key={todo.id}>
                    <StyledTime>{time}</StyledTime>
                    {actualDate === fullDayDate && actualTime > time ? (
                      <ToolTip data-tool-tip="the set task time has passed" todo>
                        {todo.title}
                      </ToolTip>
                    ) : (
                      <StyledTitle>{todo.title}</StyledTitle>
                    )}
                    <StyledContent>{todo.content}</StyledContent>
                    <StyledButtonWrapper>
                      <StyledButton
                        onClick={() =>
                          handleAdd(todo.id, todo.title, time, todo.content, 'done', fullDate)
                        }
                      >
                        done
                      </StyledButton>
                      <StyledButton onClick={() => handleClick(todo.id)}>remove</StyledButton>
                    </StyledButtonWrapper>
                  </StyledWrapper>
                ) : (
                  ' '
                );
              })}
            </StyledColumn>
          );
        })}
      </>
    </ToDoTemplate>
  );
};

export default withContext(ToDo);
