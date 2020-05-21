import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledDoneContainer = styled.div`
  position: absolute;
  right: 4%;
  top: 50px;
  height: 14vh;
  width: 52%;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 10px;

  overflow: scroll;
`;

const StyledP = styled.p`
  position: absolute;
  top: 25px;
  left: 45%;
  margin-bottom: 5px;
  margin-top: 0;
  font-weight: bold;
`;

const StyledDone = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 6vw;
  display: inline-flex;
  font-size: 16px;
`;

const StyledParagraf = styled.p`
  display: inline-flex;
  width: 100%;
  margin: 2px 0;
  font-size: 15px;
`;

const TwitterDetail = () => {
  const details = useSelector((state) => state.natReducer.twitterDetails);

  return (
    <>
      <StyledP>Account details</StyledP>
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
