import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
  width: 40vw;
  height: 60vh;
  background-color: white;
  box-shadow: 0 20px 40px -10px rgba(#818181, 0.5);
  border: 5px solid ${({ theme }) => theme.movies};
  border-right: 10px solid ${({ theme }) => theme.movies};
  border-top: 10px solid ${({ theme }) => theme.movies};
  border-radius: 10px;
`;

const StyledCardWrapper = styled.div`
  display: flex;
`;

const StyledDetails = styled.div`
  flex-direction: column;
`;

const StyledImage = styled.img`
  height: 20vh;
  width: 8.5vw;
  border-radius: 5px;
`;

const Modal = () => {
  const details = useSelector((state) => state.moviesReducer.details);
  return (
    <StyledWrapper>
      {details && (
        <StyledCardWrapper>
          <div>
            <StyledImage src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} />
          </div>
          <StyledDetails>
            <p>{details.title}</p>
            <p>{details.genres && details.genres.map((cat) => `${cat.name},`)}</p>
            <p>{details.release_date}</p>
            <p>{details.popularity}</p>
            <p>{details.vote_average}</p>
            <p>{details.adult === false ? 'no' : 'yes'}</p>
            <p>language: {details.original_language}</p>
            <p>{details.production_companies && details.production_companies.name}</p>
            tytul, data wypuszczenia, ocena, ilosc glosow, description, rodzaj, popularnosc, ocena,
            production companies
          </StyledDetails>
        </StyledCardWrapper>
      )}
    </StyledWrapper>
  );
};

export default Modal;
