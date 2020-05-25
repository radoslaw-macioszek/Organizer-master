import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const StyledDoneContainer = styled.div`
  position: absolute;
  right: 4%;
  top: 5rem;
  height: 35%;
  width: 50%;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 1rem;

  overflow: scroll;

  @media ${devices.laptop} {
    top: 3rem;
    height: 20%;
    right: 2%;
  }

  @media ${devices.tablet} {
    top: 17rem;
    height: 13%;
    width: 98%;
  }
`;

const StyledP = styled.p`
  display: flex;
  position: absolute;
  top: 2.5rem;
  left: 49%;
  margin-bottom: 0.5rem;
  margin-top: 0;
  font-weight: bold;

  @media ${devices.laptop} {
    top: 0.5rem;
  }

  @media ${devices.tablet} {
    top: 14.5rem;
    width: 100%;
    left: 1rem;
  }
`;

const StyledDone = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 20%;
  font-size: 1.6rem;

  @media ${devices.laptop} {
    min-width: 35%;
  }
`;

const StyledSpanTitle = styled.span`
  min-width: 40%;
  font-size: 1.6rem;

  @media ${devices.laptop} {
    margin-top: -0.2rem;
  }
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
  margin-top: -0.5rem;
  margin-left: 2.5rem;
  text-align: center;

  @media ${devices.laptop} {
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-top: -0.5rem;
  }

  @media ${devices.mobileL} {
    display: none;
  }
`;

const TwitterDetail = () => {
  const details = useSelector((state) => state.natReducer.twitterDetails);

  return (
    <>
      <StyledP>
        <StyledSpanTitle>Account details</StyledSpanTitle>
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
