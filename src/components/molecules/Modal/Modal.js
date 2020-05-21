import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';

import { addToMovieList } from '../../../store/NATitems/NATitems.reducer';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
  width: 39vw;
  height: 75vh;
  background-color: white;
  box-shadow: 0 20px 40px -10px rgba(#818181, 0.5);
  border: 2px solid ${({ theme }) => theme.movies};
  border-right: 10px solid ${({ theme }) => theme.movies};
  border-left: 10px solid ${({ theme }) => theme.movies};
  border-radius: 10px;
  z-index: 99999;
  box-shadow: 60px 80px 20px -10px rgba(0, 0, 0, 0.3);

  transition: all 5s ease;
`;

const StyledTopWrapper = styled.div`
  display: flex;
  padding: 10px 5px;
  height: 32vh;
  padding-right: 15px;
`;

const StyledDetails = styled.div`
  flex-direction: column;
  width: 100%;
  padding-right: 10px;
`;

const StyledImage = styled.img`
  height: 29vh;
  width: 12.5vw;
  border-radius: 5px;
  margin: 10px;
  margin-right: 2rem;
`;

const StyledTitle = styled.p`
  font-size: 25px;
  margin: 10px 0 20px;
  text-align: left;
  font-weight: bold;
`;

const StyledSeriesTitle = styled(StyledTitle)`
  margin: 10px 0 8px;
`;

const StyledSubTitle = styled.p`
  font-size: 16px;
  margin: -13px 0 10px 4px;
  text-align: left;
`;

const StyledVages = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;

  p {
    margin: 5px 0;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 6vw;
  display: inline-flex;
  font-size: 16px;
`;
const StyledGenres = styled.p`
  font-size: 15px;
  margin: 18px 0 5px 0;
  display: inline-flex;
`;

const StyledBottomWrapper = styled.div`
  font-size: 16px;
  height: 26vh;
  text-align: justify;
  padding: 32px 30px 10px;
  line-height: 1.5;
`;

const StyledParagraph = styled.p`
  display: inline-flex;
  width: 100%;
  margin: 7px 0;
  font-size: 15px;
`;

const StyledAddButton = styled.button`
  position: absolute;
  bottom: 1vh;
  right: 15px;
  padding: 6px 6px;
  font-size: 11px;
  border-radius: 5px;
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
          <div>
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
                  <p>${details.popularity} kk</p>
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
          </div>
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
