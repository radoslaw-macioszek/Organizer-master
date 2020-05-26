import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';

import { addToMovieList } from '../../../store/NATitems/NATitems.reducer';
import { devices } from '../../../Devices/devices';

const Animation = keyframes`
  0% {  opacity: 0 ; top: 50%; left: -100%}
 80% { opacity: 0.9 ; top: 50%; left: 5%}
 100% {   opacity: 1 ; top: 50%; left: 0} 
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
  width: 35vw;
  height: 75vh;
  background-color: white;
  box-shadow: 0 2rem 4rem -1rem rgba(#818181, 0.5);
  border: 2px solid ${({ theme }) => theme.movies};
  border-right: 1rem solid ${({ theme }) => theme.movies};
  border-left: 1rem solid ${({ theme }) => theme.movies};
  border-radius: 1rem;
  z-index: 99999;
  box-shadow: 0px 0px 10rem 200rem rgba(0, 0, 0, 0.3);

  animation: ${Animation} 1s ease-in-out;
  transition: ${Animation};

  @media ${devices.laptop} {
    width: 75vw;
  }
`;

const StyledBackground = styled.div``;

const StyledTopWrapper = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  height: 32vh;
  padding-right: 1.5rem;
`;

const StyledDetails = styled.div`
  flex-direction: column;
  width: 100%;
  padding-right: 1rem;

  @media ${devices.mobileL} {
    padding: 1.5rem;
  }
`;

const StyledImage = styled.img`
  height: 29vh;
  width: 12.5vw;
  border-radius: 5px;
  margin: 1rem;
  margin-right: 2rem;

  @media ${devices.tablet} {
    width: 18vw;
  }

  @media ${devices.mobileL} {
    display: none;
  }
`;

const StyledTitle = styled.p`
  font-size: 2.5rem;
  margin: 1rem 0 2rem;
  text-align: left;
  font-weight: bold;

  @media ${devices.mobileM} {
    font-size: 2rem;
  }
`;

const StyledSeriesTitle = styled(StyledTitle)`
  margin: 1rem 0 0.8rem;
`;

const StyledSubTitle = styled.p`
  font-size: 1.6rem;
  margin: -1.3rem 0 1rem 0.4rem;
  text-align: left;
  @media ${devices.mobileM} {
    font-size: 1.3rem;
  }
`;

const StyledVages = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;

  p {
    margin: 0.5rem 0;
  }

  @media ${devices.mobileM} {
    font-size: 1.2rem;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 6vw;
  display: inline-flex;
  font-size: 1.6rem;
  @media ${devices.laptop} {
    min-width: 10vw;
  }

  @media ${devices.mobileL} {
    min-width: 20vw;
  }

  @media ${devices.mobileM} {
    font-size: 1.3rem;
  }
`;
const StyledGenres = styled.p`
  font-size: 1.5rem;
  margin: 1.8rem 0 0.5rem 0;
  display: inline-flex;
  @media ${devices.mobileM} {
    font-size: 1.4rem;
  }
`;

const StyledBottomWrapper = styled.div`
  overflow: scroll;
  font-size: 1.6rem;
  height: 38vh;
  text-align: justify;
  padding: 2rem 3rem 1rem;
  line-height: 1.5;

  @media ${devices.mobileL} {
    font-size: 1.5rem;
    padding: 3rem 2rem 1rem;
  }
`;

const StyledParagraph = styled.p`
  display: inline-flex;
  width: 100%;
  margin: 0.7rem 0;
  font-size: 1.5rem;
`;

const StyledAddButton = styled.button`
  position: absolute;
  bottom: 1vh;
  right: 1.5rem;
  padding: 0.6rem 0.6rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
`;

const Modal = () => {
  const series = 'series';
  const movies = 'movies';
  const dispatch = useDispatch();

  const details = useSelector((state) => state.moviesReducer.details);
  const type = useSelector((state) => state.moviesReducer.type);

  const runtime = details.runtime / 60;
  const hours = runtime.toString().slice(0, 1) * 1;
  const minutes = Math.ceil((runtime.toString().slice(2, 4) * 60) / 100);
  return (
    <StyledWrapper>
      {details &&
        (type === 'movie' ? (
          <StyledBackground>
            <StyledTopWrapper>
              <StyledImage src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} />
              <StyledDetails>
                <StyledTitle>{details.title}</StyledTitle>
                <StyledSubTitle>{details.tagline ? `,,${details.tagline}''` : ''}</StyledSubTitle>
                <StyledVages>
                  <p>
                    <FaStar color="#ffc107" />
                    {details.vote_average}
                  </p>
                  <p>${details.popularity}</p>
                  <p>{details.release_date && details.release_date.slice(0, 4)}</p>
                  <p>
                    {hours}h {minutes} min.
                  </p>
                  <p>{details.original_language && details.original_language.toUpperCase()}</p>
                  <p>{details.adult === false ? '' : '18+'}</p>
                </StyledVages>
                <StyledGenres>
                  <StyledSpan>genres:</StyledSpan>
                  {details.genres && details.genres.map((cat) => ` ${cat.name},`)}
                </StyledGenres>
                <StyledParagraph>
                  <StyledSpan>production:</StyledSpan>
                  {details.production_companies &&
                    details.production_companies.map((comp) => ` ${comp.name},`)}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan>country:</StyledSpan>
                  {details.production_countries &&
                    details.production_countries.map((comp) => ` ${comp.name},`)}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan>premiere:</StyledSpan>
                  {details.release_date}
                </StyledParagraph>
              </StyledDetails>
            </StyledTopWrapper>
            <StyledBottomWrapper>
              <StyledSpan>description:</StyledSpan>
              <hr />
              {details.overview}
            </StyledBottomWrapper>
            <StyledAddButton
              onClick={() =>
                dispatch(
                  addToMovieList(
                    details.id,
                    details.title,
                    `https://image.tmdb.org/t/p/w500${details.poster_path}`,
                    details.vote_average,
                    details.popularity,
                    details.release_date,
                    movies,
                  ),
                )
              }
            >
              + Add to your movie list
            </StyledAddButton>
          </StyledBackground>
        ) : (
          <div>
            <StyledTopWrapper>
              <StyledImage src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} />
              <StyledDetails>
                <StyledSeriesTitle>{details.name}</StyledSeriesTitle>

                <StyledVages>
                  <p>
                    <FaStar color="#ffc107" />
                    {details.vote_average}
                  </p>
                  <p>{details.popularity} kk</p>
                  <p>{details.first_air_date && details.first_air_date.slice(0, 4)}</p>
                  <p>{details.episode_run_time} min.</p>
                  <p>
                    lang. {details.original_language && details.original_language.toUpperCase()}
                  </p>
                </StyledVages>
                <StyledGenres>
                  <StyledSpan>genres:</StyledSpan>
                  {details.genres && details.genres.map((cat) => ` ${cat.name},`)}
                </StyledGenres>

                <StyledParagraph>
                  <StyledSpan>seasons:</StyledSpan>
                  {details.number_of_seasons}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan>episodes:</StyledSpan>
                  {details.number_of_episodes}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan>Networks:</StyledSpan>
                  {details.networks && details.networks.map((network) => ` ${network.name}`)}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan>director:</StyledSpan>
                  {details.created_by && details.created_by.map((dir) => ` ${dir.name}`)}
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan>production:</StyledSpan>
                  {details.production_companies &&
                    details.production_companies.map((comp) => ` ${comp.name},`)}
                </StyledParagraph>
              </StyledDetails>
            </StyledTopWrapper>
            <StyledBottomWrapper>
              <StyledSpan>description:</StyledSpan>
              <hr />
              {details.overview}
            </StyledBottomWrapper>
            <StyledAddButton
              onClick={() =>
                dispatch(
                  addToMovieList(
                    details.id,
                    details.name,
                    `https://image.tmdb.org/t/p/w500${details.poster_path}`,
                    details.vote_average,
                    details.popularity,
                    details.first_air_date,
                    series,
                  ),
                )
              }
            >
              + Add to your series list
            </StyledAddButton>
          </div>
        ))}
    </StyledWrapper>
  );
};

export default Modal;
