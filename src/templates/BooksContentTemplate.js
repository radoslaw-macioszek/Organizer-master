import React from 'react';
import withContext from '../hoc/withContext';

import UserPageTemplate from './UserPageTemplate';
import BookTemplate from './BookTemplate';

import Books from '../views/Books/BooksBar';
import Book from '../views/Books/Book';

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
