import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ToDoTemplate from '../templates/ToDoTemplate';

import withContext from '../hoc/withContext';
import { removeItem, addToDone } from '../store/NATitems/NATitems.reducer';

const StyledColumn = styled.div`
  border-right: 1px solid ${({ theme }) => theme.grey200};
  border-left: 1px solid ${({ theme }) => theme.grey200};

  text-align: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  max-width: 12vw;
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

const StyledTime = styled.p`
  font-size: 15px;
  margin: 0 0 8px 0;
  text-align: left;
  text-decoration: underline;
`;

const StyledContent = styled.p`
  text-align: justify;
  padding-bottom: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.grey200};
  word-wrap: break-word;


  /* background-color: ${(props) => (props.active ? 'green' : 'white')}; */
`;

const StyledTitle = styled.h3`
  margin: 0;
  padding: 5px 0;
  word-wrap: break-word;
`;

const StyledDoneTitle = styled(StyledTitle)`
  text-decoration: line-through;
  background-color: ${({ theme }) => theme.grey200};
  border-radius: 3px;

  position: relative;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.4rem;
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.grey300};
    padding: 5px 15px;
    color: white;
    border-radius: 3px;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    transform: scale(0);
    transition: transform ease-out 150ms, bottom ease-out 150ms;
  }

  &:hover::after {
    transform: scale(1);
    bottom: 100%;
  }
`;

const StyledWrapper = styled.div`
  padding: 0 15px;
`;

const StyledButtonWrapper = styled.div`
  margin-bottom: 40px;
`;

//

const ToDo = ({ pageContext, actualDate }) => {
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
  const currentYear = currentDate.toString().slice(6) * 1;
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

          const fullDayDate = `${bottomHeaderDate}.${currentMonth}.${currentYear}`;
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
                      <StyledDoneTitle data-tool-tip="the set task time has passed">
                        {todo.title}
                      </StyledDoneTitle>
                    ) : (
                      <StyledTitle>{todo.title}</StyledTitle>
                    )}
                    <StyledContent>{todo.content}</StyledContent>
                    <StyledButtonWrapper>
                      <button
                        onClick={() =>
                          handleAdd(todo.id, todo.title, time, todo.content, 'done', fullDate)
                        }
                      >
                        done
                      </button>
                      <button onClick={() => handleClick(todo.id)}>remove</button>
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
