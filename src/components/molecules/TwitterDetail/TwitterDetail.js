import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledDoneContainer = styled.div`
  position: absolute;
  right: 4%;
  top: 5rem;
  height: 14vh;
  width: 52%;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 1rem;

  overflow: scroll;
`;

const StyledP = styled.p`
  display: flex;
  position: absolute;
  top: 2.5rem;
  left: 45%;
  margin-bottom: 0.5rem;
  margin-top: 0;
  font-weight: bold;
`;

const StyledDone = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 6vw;
  font-size: 1.6rem;
`;

const StyledParagraf = styled.p`
  display: inline-flex;
  width: 100%;
  margin: 2px 0;
  font-size: 1.5rem;
`;

const StyledInstruction = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.grey300};
  margin-top: 0;
  margin-left: 2.5rem;
  text-align: center;
`;

const TwitterDetail = () => {
  const details = useSelector((state) => state.natReducer.twitterDetails);

  return (
    <>
      <StyledP>
        Account details
        <StyledInstruction>(Click on the Twitter Header to see Twitter details!)</StyledInstruction>
      </StyledP>
      <StyledDoneContainer>
        {details &&
          details.map((item) => (
            <div key={item.id}>
              <StyledDone>
                <StyledParagraf>
                  <StyledSpan>added:</StyledSpan>
                  {item.date}
                </StyledParagraf>
                <StyledParagraf>
                  <StyledSpan>account:</StyledSpan>
                  {item.name}
                </StyledParagraf>
                <StyledParagraf>
                  <StyledSpan>title:</StyledSpan>
                  {item.title}
                </StyledParagraf>
                <StyledParagraf>
                  <StyledSpan>content:</StyledSpan>
                  {item.content}
                </StyledParagraf>
              </StyledDone>
            </div>
          ))}
      </StyledDoneContainer>
    </>
  );
};

export default TwitterDetail;
