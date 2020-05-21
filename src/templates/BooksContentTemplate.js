import React from 'react';
import withContext from '../hoc/withContext';

import UserPageTemplate from './UserPageTemplate';
import BookTemplate from './BookTemplate';

import Books from '../views/Books';
import Book from '../views/Books/Book';
import BooksToRead from '../views/Books/BooksToRead';
import BooksRead from '../views/Books/BooksRead';
import BooksFavorite from '../views/Books/BooksFavorite';

const BooksContentTemplate = () => {
  return (
    <UserPageTemplate>
      <>
        <BookTemplate>
          <Book />
        </BookTemplate>
        <Books />
      </>
    </UserPageTemplate>
  );
};

export default withContext(BooksContentTemplate);
