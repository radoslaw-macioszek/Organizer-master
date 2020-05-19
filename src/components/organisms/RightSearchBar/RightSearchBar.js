import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import withContext from '../../../hoc/withContext';
import { loadBooksAction } from '../../../store/books/books.reducer';
import { loadMoviesAction } from '../../../store/movies/movies.reducer';

import Input from '../../atoms/Input/Input';
import Heading from '../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);

  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 30px 60px;

  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 800px;
  background-color: white;

  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform ease-out 0.5s;

  overflow: scroll;
`;

const StyledInput = styled(Input)`
  margin-top: 15px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledBookArea = styled.div`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 50vh;
`;

const RightSearchBar = ({ pageContext, isVisible, children }) => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState('Search');
  const [bookLoading, setBookLoading] = useState(true);

  const handleChange = (event) => {
    setSearchPhrase(event.target.value);
  };

  const handleSubmit = (event) => {
    setBookLoading(!bookLoading);
    event.preventDefault();
  };

  useEffect(() => {
    if (pageContext === 'books' && searchPhrase !== '') {
      dispatch(loadBooksAction(searchPhrase));
    } else if (pageContext === 'movies' && searchPhrase !== '') {
      dispatch(loadMoviesAction(searchPhrase, 'movie'));
    } else if (pageContext === 'series' && searchPhrase !== '') {
      dispatch(loadMoviesAction(searchPhrase, 'tv'));
    }
  }, [dispatch, bookLoading, pageContext, searchPhrase]);

  return pageContext === 'books' ? (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <Heading>Books</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Find book"
          autoComplete="off"
          value={searchPhrase}
          onChange={handleChange}
          onClick={() => setSearchPhrase('')}
        />
      </StyledForm>
      <StyledBookArea>{children}</StyledBookArea>
    </StyledWrapper>
  ) : (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <Heading>{pageContext === 'movies' ? 'Movies' : 'Series'}</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Search movie"
          autoComplete="off"
          value={searchPhrase}
          onChange={handleChange}
          onClick={() => setSearchPhrase('')}
        />
      </StyledForm>
      <StyledBookArea>{children}</StyledBookArea>
    </StyledWrapper>
  );
};

export default withContext(RightSearchBar);
