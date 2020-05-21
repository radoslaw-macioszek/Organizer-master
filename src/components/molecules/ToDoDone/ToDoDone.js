import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledDoneContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 14vh;
  width: 55%;
  border: 3px solid ${({ theme }) => theme.todos};
  border-radius: 10px;

  overflow: scroll;
`;

const StyledDate = styled.span`
  margin-right: 5px;
`;

const StyledTitle = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const StyledDone = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const StyledFont = styled.div`
  font-size: 14px;
`;

const ToDoDone = () => {
  const done = useSelector((state) => state.natReducer.done);
  done.sort((a, b) => (a.fullDate > b.fullDate ? 1 : -1));
  return (
    <StyledDoneContainer>
      {done &&
        done.map((item) => (
          <div key={item.id}>
            <StyledDone>
              <StyledFont>
                <StyledDate>{item.date}</StyledDate>
                <StyledDate>{item.fullDate}</StyledDate>
              </StyledFont>
              <div>
                <StyledTitle>{item.title}</StyledTitle>
                {item.content}
              </div>
            </StyledDone>
          </div>
        ))}
    </StyledDoneContainer>
  );
};

export default ToDoDone;
