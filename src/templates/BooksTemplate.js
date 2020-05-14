import React from 'react';
import withContext from '../hoc/withContext';

import UserPageTemplate from './UserPageTemplate';
import BookTemplate from './bookTemplate';

import Books from '../views/Books';
import BooksToRead from '../views/Books/BooksToRead';
import BooksRead from '../views/Books/BooksRead';
import BooksFavorite from '../views/Books/BooksFavorite';

const BooksTemplate = () => {
  return (
    <UserPageTemplate>
      <>
        <BookTemplate>
          <BooksToRead />
          <BooksRead />
          <BooksFavorite />
        </BookTemplate>
        <Books />
      </>
    </UserPageTemplate>
  );
};

export default withContext(BooksTemplate);
