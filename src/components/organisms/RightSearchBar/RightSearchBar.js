import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import withContext from '../../../hoc/withContext';
import { loadBooksAction } from '../../../store/books/books.reducer';
import { loadMoviesAction } from '../../../store/movies/movies.reducer';

import Input from '../../atoms/Input/Input';
import Heading from '../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 1rem solid ${({ theme, activecolor }) => theme[activecolor]};
  box-shadow: -0.5rem 0 1.5rem rgba(0, 0, 0, 0.2);

  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 3rem 6rem;

  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 80rem;
  background-color: white;

  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform ease-out 0.5s;

  overflow: scroll;
`;

const StyledInput = styled(Input)`
  margin-top: 1.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledBookArea = styled.div`
  margin: 3rem 0 10rem;
  border-radius: 2rem;
  height: 50vh;
`;

const RightSearchBar = ({ pageContext, isVisible, children }) => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState('Harry');
  const [searchBookPhrase, setSearchBookPhrase] = useState('Lord');

  const [bookLoading, setBookLoading] = useState(true);

  const handleChange = (event) => {
    setSearchPhrase(event.target.value);
  };

  const handleSubmit = (event) => {
    setBookLoading(!bookLoading);
    event.preventDefault();
  };

  useEffect(() => {
    if (pageContext === 'books' && searchBookPhrase !== '') {
      dispatch(loadBooksAction(searchBookPhrase));
      setSearchBookPhrase('');
    } else if (pageContext === 'movies' && searchPhrase !== '') {
      dispatch(loadMoviesAction(searchPhrase, 'movie'));
      setSearchPhrase('');
    } else if (pageContext === 'series' && searchPhrase !== '') {
      dispatch(loadMoviesAction(searchPhrase, 'tv'));
      setSearchPhrase('');
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
          value={searchBookPhrase}
          onChange={handleChange}
          onClick={() => setSearchBookPhrase('')}
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
