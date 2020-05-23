import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { devices } from '../../../Devices/devices';

const StyledDoneContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 14vh;
  width: 55%;
  border: 3px solid ${({ theme }) => theme.todos};
  border-radius: 1rem;

  overflow: scroll;

  @media ${devices.laptop} {
    top: 3rem;
    height: 9vh;
  }

  @media ${devices.tablet} {
    top: 16rem;
    height: 100%;
    width: 100%;
  }
`;

const StyledDate = styled.span`
  margin-right: 0.5rem;
`;

const StyledTitle = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const StyledDone = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledFont = styled.div`
  font-size: 1.4rem;
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
